import logging

from gpt_computer.core.chat_to_files import parse_diffs


def test_parse_diffs_with_diff_tag():
    chat = """
Here is the change:
```diff
--- file.py
+++ file.py
@@ -1,1 +1,1 @@
-old
+new
```
"""
    diffs = parse_diffs(chat)
    assert "file.py" in diffs
    assert diffs["file.py"].filename_pre == "file.py"


def test_parse_diffs_with_other_tag():
    # Test that it works with python or other tags if they contain the diff markers
    chat = """
```python
--- file.py
+++ file.py
@@ -1,1 +1,1 @@
-old
+new
```
"""
    diffs = parse_diffs(chat)
    assert "file.py" in diffs


def test_parse_diffs_fallback():
    # Test the fallback when no code blocks are present but diff markers are
    chat = """
--- file.py
+++ file.py
@@ -1,1 +1,1 @@
-old
+new
"""
    diffs = parse_diffs(chat)
    assert "file.py" in diffs
    assert diffs["file.py"].filename_pre == "file.py"


def test_parse_diffs_with_logger(caplog):
    # Test that it logs warnings instead of printing
    chat = """
```diff
--- file.py
+++ file.py
@@ -1,1 +1,1 @@
-old
+new
```
```diff
--- file.py
+++ file.py
@@ -1,1 +1,1 @@
-another old
+another new
```
"""
    with caplog.at_level(logging.WARNING):
        diffs = parse_diffs(chat)

    assert "file.py" in diffs
    assert any(
        "Multiple diffs found for file.py" in record.message
        for record in caplog.records
    )


def test_parse_diff_with_path_prefixes():
    content = """
```diff
--- a/src/main.py
+++ b/src/main.py
@@ -1,1 +1,1 @@
-old
+new
```
"""
    diffs = parse_diffs(content)
    assert "src/main.py" in diffs
    assert diffs["src/main.py"].filename_pre == "src/main.py"


def test_parse_diff_shorthand_hunk():
    content = """
```diff
--- main.py
+++ main.py
@@ -1 +1 @@
-old
+new
```
"""
    diffs = parse_diffs(content)
    assert "main.py" in diffs
    hunk = diffs["main.py"].hunks[0]
    assert hunk.start_line_pre_edit == 1
    assert hunk.hunk_len_pre_edit == 1
    assert hunk.start_line_post_edit == 1
    assert hunk.hunk_len_post_edit == 1

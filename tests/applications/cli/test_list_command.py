from typer.testing import CliRunner

from gpt_computer.applications.cli.main import app

runner = CliRunner()


def test_list_command_no_projects(tmp_path, monkeypatch):
    # Change current directory to a temp path
    monkeypatch.chdir(tmp_path)

    result = runner.invoke(app, ["list"])
    assert result.exit_code == 0
    assert "No projects directory found" in result.stdout


def test_list_command_with_projects(tmp_path, monkeypatch):
    # Create projects directory and some projects
    projects_dir = tmp_path / "projects"
    projects_dir.mkdir()

    # Project with prompt
    p1 = projects_dir / "project1"
    p1.mkdir()
    (p1 / "prompt").write_text("prompt 1")

    # Project without prompt
    p2 = projects_dir / "project2"
    p2.mkdir()

    # File in projects (should be ignored)
    (projects_dir / "random_file.txt").write_text("nothing")

    monkeypatch.chdir(tmp_path)

    result = runner.invoke(app, ["list"])
    assert result.exit_code == 0
    assert "Available projects:" in result.stdout
    assert "- project1" in result.stdout
    assert "- project2" not in result.stdout

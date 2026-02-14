from langchain.chat_models.base import BaseChatModel
from langchain_community.chat_models.fake import FakeListChatModel

from gpt_computer.core.ai import AI


def mock_create_chat_model(self) -> BaseChatModel:
    return FakeListChatModel(responses=["response1", "response2", "response3"])


def test_start(monkeypatch):
    monkeypatch.setattr(AI, "_create_chat_model", mock_create_chat_model)

    ai = AI("gpt-4")

    # act
    response_messages = ai.start("system prompt", "user prompt", step_name="step name")

    # assert
    assert response_messages[-1].content == "response1"


def test_next(monkeypatch):
    # arrange
    monkeypatch.setattr(AI, "_create_chat_model", mock_create_chat_model)

    ai = AI("gpt-4")
    response_messages = ai.start("system prompt", "user prompt", step_name="step name")

    # act
    response_messages = ai.next(
        response_messages, "next user prompt", step_name="step name"
    )

    # assert
    assert response_messages[-1].content == "response2"


def test_token_logging(monkeypatch):
    # arrange
    monkeypatch.setattr(AI, "_create_chat_model", mock_create_chat_model)

    ai = AI("gpt-4")

    # act
    response_messages = ai.start("system prompt", "user prompt", step_name="step name")
    usageCostAfterStart = ai.token_usage_log.usage_cost()
    ai.next(response_messages, "next user prompt", step_name="step name")
    usageCostAfterNext = ai.token_usage_log.usage_cost()

    # assert
    assert usageCostAfterStart > 0
    assert usageCostAfterNext > usageCostAfterStart


def test_base_url_support(monkeypatch):
    # Tests that base_url is correctly passed to the LLM constructor
    mock_calls = []

    class MockChatOpenAI:
        def __init__(self, **kwargs):
            mock_calls.append(kwargs)
            self.model = ""  # minimal mock

    # Mock the import in the ai module
    monkeypatch.setattr("gpt_computer.core.ai.ChatOpenAI", MockChatOpenAI)
    # Also need to mock _create_chat_model if it's called in __init__, 
    # but wait, existing tests mock AI._create_chat_model which BYPASSES the logic I want to test.
    # So I must NOT mock AI._create_chat_model, but rely on mocking ChatOpenAI instead.
    
    # However, create_chat_model is called in __init__. So if I mock ChatOpenAI, 
    # AI(...) will call _create_chat_model -> MockChatOpenAI(...)
    
    ai = AI(base_url="http://localhost:11434/v1")
    
    assert ai.base_url == "http://localhost:11434/v1"
    assert len(mock_calls) > 0
    assert mock_calls[0].get("openai_api_base") == "http://localhost:11434/v1"


def test_gemini_support(monkeypatch):
    # Tests that gemini models use ChatGoogleGenerativeAI
    mock_calls = []

    class MockChatGoogleGenerativeAI:
        def __init__(self, **kwargs):
            mock_calls.append(kwargs)
            self.model = ""

    # Mock the imports
    monkeypatch.setattr("gpt_computer.core.ai.ChatGoogleGenerativeAI", MockChatGoogleGenerativeAI)
    # Ensure it's not None (since we have try-except block in ai.py)
    # We might need to monkeypatch the module level variable if it was imported as None
    # effectively we need to make sure the runtime sees our Mock class.
    
    # Since the import happens at top level, if it failed, ChatGoogleGenerativeAI is None. 
    # Monkeypatching 'gpt_computer.core.ai.ChatGoogleGenerativeAI' should work if we do it right.
    
    ai = AI(model_name="gemini-1.5-pro")
    
    assert len(mock_calls) > 0
    assert mock_calls[0].get("model") == "gemini-1.5-pro"
    assert mock_calls[0].get("convert_system_message_to_human") is True


def test_groq_support(monkeypatch):
    # Tests that llama models use ChatGroq by default if no base_url
    mock_calls = []

    class MockChatGroq:
        def __init__(self, **kwargs):
            mock_calls.append(kwargs)
            self.model_name = kwargs.get("model_name", "")

    monkeypatch.setattr("gpt_computer.core.ai.ChatGroq", MockChatGroq)
    
    ai = AI(model_name="llama3-8b-8192")
    
    assert len(mock_calls) > 0
    assert mock_calls[0].get("model_name") == "llama3-8b-8192"


def test_mistral_support(monkeypatch):
    # Tests that mistral models use ChatMistralAI by default if no base_url
    mock_calls = []

    class MockChatMistralAI:
        def __init__(self, **kwargs):
            mock_calls.append(kwargs)
            self.model = kwargs.get("model", "")

    monkeypatch.setattr("gpt_computer.core.ai.ChatMistralAI", MockChatMistralAI)
    
    ai = AI(model_name="mistral-large-latest")
    
    assert len(mock_calls) > 0
    assert mock_calls[0].get("model") == "mistral-large-latest"


def test_cohere_support(monkeypatch):
    # Tests that command models use ChatCohere by default if no base_url
    mock_calls = []

    class MockChatCohere:
        def __init__(self, **kwargs):
            mock_calls.append(kwargs)
            self.model = kwargs.get("model", "")

    monkeypatch.setattr("gpt_computer.core.ai.ChatCohere", MockChatCohere)
    
    ai = AI(model_name="command-r-plus")
    
    assert len(mock_calls) > 0
    assert mock_calls[0].get("model") == "command-r-plus"

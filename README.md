# 🚀 gpt-computer

> **Enterprise-ready autonomous code generation framework**
> Transform natural language into executable, testable, and iteratively refined software.

<p align="center">
  <img src="https://img.shields.io/github/stars/xeondesk/gpt-computer?style=social" />
  <img src="https://img.shields.io/github/license/xeondesk/gpt-computer" />
  <img src="https://img.shields.io/github/v/release/xeondesk/gpt-computer" />
  <img src="https://img.shields.io/github/issues/xeondesk/gpt-computer" />
</p>

---

# ✨ Overview

gpt-computer is an **execution-native AI software generation platform** designed for:

* 🏢 Enterprises exploring autonomous development
* 🔬 Research institutions studying agent systems
* 👨‍💻 Engineering teams building AI-powered workflows

Unlike prompt-only assistants, gpt-computer runs inside a **deterministic closed-loop execution system**.

---

# 🏗 Architecture

## System Flow

<p align="center">
<svg width="920" height="520" viewBox="0 0 920 520" xmlns="http://www.w3.org/2000/svg">
  <style>
    @media (prefers-color-scheme: dark) {
      .box { fill:#0b1220; stroke:#3b82f6; }
      .text { fill:#e5e7eb; }
      .arrow { stroke:#3b82f6; }
    }
    @media (prefers-color-scheme: light) {
      .box { fill:#ffffff; stroke:#2563eb; }
      .text { fill:#111827; }
      .arrow { stroke:#2563eb; }
    }
    .box { stroke-width:2; rx:16; }
    .text { font-family: Arial, sans-serif; font-size:14px; }
    .arrow { stroke-width:2; marker-end:url(#arrowhead); stroke-dasharray:6 4; animation: dash 3s linear infinite; }
    @keyframes dash {
      to { stroke-dashoffset: -20; }
    }
  </style>
  <defs>
    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" />
    </marker>
  </defs>

  <rect class="box" x="260" y="20" width="400" height="60">
    <animate attributeName="opacity" values="0.6;1;0.6" dur="4s" repeatCount="indefinite"/>
  </rect>
  <text class="text" x="460" y="55" text-anchor="middle">User Intent</text>

  <rect class="box" x="210" y="130" width="500" height="90">
    <animate attributeName="opacity" values="0.6;1;0.6" dur="4s" begin="0.5s" repeatCount="indefinite"/>
  </rect>
  <text class="text" x="460" y="175" text-anchor="middle">Orchestration Layer</text>

  <rect class="box" x="210" y="260" width="500" height="90">
    <animate attributeName="opacity" values="0.6;1;0.6" dur="4s" begin="1s" repeatCount="indefinite"/>
  </rect>
  <text class="text" x="460" y="305" text-anchor="middle">Model Abstraction</text>

  <rect class="box" x="210" y="390" width="500" height="90">
    <animate attributeName="opacity" values="0.6;1;0.6" dur="4s" begin="1.5s" repeatCount="indefinite"/>
  </rect>
  <text class="text" x="460" y="435" text-anchor="middle">Execution Runtime</text>

  <line class="arrow" x1="460" y1="80" x2="460" y2="130"/>
  <line class="arrow" x1="460" y1="220" x2="460" y2="260"/>
  <line class="arrow" x1="460" y1="350" x2="460" y2="390"/>
</svg>
</p>
</p>

---

# 🔁 Closed-Loop Execution Model

```text
Intent → Plan → Generate → Execute → Analyze → Repair → Repeat
```

This loop enables:

* Deterministic experimentation
* Controlled iteration
* Execution-aware evaluation
* Infrastructure alignment

---

# 💼 Enterprise Capabilities

| Capability                | Description                     |
| ------------------------- | ------------------------------- |
| Autonomous Prototyping    | Generate internal tools rapidly |
| Execution-Aware Agents    | Evaluate real runtime outcomes  |
| Infrastructure Compatible | Runs in Docker, CI, on-prem     |
| Model Agnostic            | No vendor lock-in               |
| Research Benchmarking     | APPS & MBPP support             |

---

# 🚀 Quick Start

## Install

```bash
python -m pip install gpt-computer
```

## Configure API

```bash
# For OpenAI
export OPENAI_API_KEY=your_api_key

# For Anthropic
export ANTHROPIC_API_KEY=your_api_key

# For Google Gemini
export GOOGLE_API_KEY=your_api_key

# For Groq
export GROQ_API_KEY=your_api_key

# For Mistral
export MISTRAL_API_KEY=your_api_key

# For Cohere
export COHERE_API_KEY=your_api_key
```

## Running with Local LLMs

gpt-computer supports local LLMs via any OpenAI-compatible server (Ollama, vLLM, LocalAI, etc.):

```bash
gptc my-project --model llama3 --base-url http://localhost:11434/v1
```

## Supported Models

We support a wide range of state-of-the-art models:
* **OpenAI**: GPT-4o, GPT-4-turbo, GPT-3.5-turbo
* **Anthropic**: Claude 3.5 Sonnet, Claude 3 Opus/Haiku
* **Google**: Gemini 1.5 Pro/Flash
* **Groq**: Llama 3 (70B/8B), Mixtral 8x7B
* **Mistral**: Mistral Large 2, Pixtral
* **Cohere**: Command R+

## Project Examples

Explore our built-in templates to get started quickly:
```bash
make run snake-game
make run calculator
make run personal-finance
make run unit-converter
make run password-generator
```

## Generate a Project

```bash
gptc my-project
```

---

# 🧪 Benchmarking & Research

Includes a built-in CLI (`bench`) for evaluating agents against:

* APPS dataset
* MBPP dataset

---

# 🔐 Security & Deployment

* Local-first execution
* Docker-compatible
* No hidden background services
* Compatible with private model endpoints
* CI/CD friendly

Deploy within:

* Isolated containers
* On-prem infrastructure
* Private cloud environments
* Regulated enterprise networks

---

# 🧠 Strategic Vision

gpt-computer defines a foundational primitive for autonomous systems:

**Intent → Generation → Execution → Evaluation → Iteration**

It enables organizations to explore reproducible, execution-aware AI development workflows.

---

# 📜 Governance

* Open governance model
* Transparent development process
* MIT License

See `GOVERNANCE.md` and `TERMS_OF_USE.md`.

---

<p align="center">
  <strong>Autonomous software generation — controlled, reproducible, infrastructure-aligned.</strong>
</p>

#Sets the default shell for executing commands as /bin/bash and specifies command should be executed in a Bash shell.
SHELL := /bin/bash

# Color codes for terminal output
COLOR_RESET=\033[0m
COLOR_CYAN=\033[1;36m
COLOR_GREEN=\033[1;32m

# Defines the targets help, install, dev-install, and run as phony targets.
.PHONY: help install run

#sets the default goal to help when no target is specified on the command line.
.DEFAULT_GOAL := help

#Disables echoing of commands.
.SILENT:

# Sets the variable name to the second word from the MAKECMDGOALS.
name := $(word 2,$(MAKECMDGOALS))

# Default model
MODEL ?= gpt-4o

# Defines a target named help.
help:
	@echo "Please use 'make <target>' where <target> is one of the following:"
	@echo "  help           	Return this message with usage instructions."
	@echo "  install        	Will install the dependencies using Poetry."
	@echo "  run <folder_name>  Runs GPT Computer on the folder with the given name."
	@echo "                   Set MODEL default is gpt-4o (e.g., make run calculator MODEL=gemini-1.5-pro)"
	@echo "  test           	Runs the unit tests."
	@echo "  lint           	Runs ruff for linting."

# Defines a target named install. This target will install the project using Poetry.
install: poetry-install install-pre-commit farewell

# Defines a target named poetry-install. This target will install the project dependencies using Poetry.
poetry-install:
	@echo -e "$(COLOR_CYAN)Installing project with Poetry...$(COLOR_RESET)" && \
	poetry install

# Defines a target named install-pre-commit. This target will install the pre-commit hooks.
install-pre-commit:
	@echo -e "$(COLOR_CYAN)Installing pre-commit hooks...$(COLOR_RESET)" && \
	poetry run pre-commit install

# Defines a target named farewell. This target will print a farewell message.
farewell:
	@echo -e "$(COLOR_GREEN)All done!$(COLOR_RESET)"

# Defines a target named run. This target will run GPT Computer on the folder with the given name.
run:
	@echo -e "$(COLOR_CYAN)Running GPT Computer on $(COLOR_GREEN)$(name)$(COLOR_CYAN) folder with model $(COLOR_GREEN)$(MODEL)$(COLOR_CYAN)...$(COLOR_RESET)" && \
	poetry run gpt-computer projects/$(name) --model $(MODEL)

# Runs unit tests
test:
	poetry run pytest

# Runs linter
lint:
	poetry run ruff check .

# Counts the lines of code in the project
cloc:
	cloc . --exclude-dir=node_modules,dist,build,.mypy_cache,benchmark --exclude-list-file=.gitignore --fullpath --not-match-d='docs/_build' --by-file

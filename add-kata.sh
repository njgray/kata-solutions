#! /usr/bin/env bash

## Use this script to add in templates for a new kata
## Templates will be added for .prompt.md, .solution.js, .tests.js
## Choose: directory, name, solution suffix, test suffix

PROMPT='_prompt.template.md'
SOLUTION='_solution.template'
TESTS='_tests.template'

KATA_NAME=${1}
DIRECTORY=${2:-'codewars'}
SUFFIX=${3:-'mjs'}
TEST_SUFFIX=${4:-'mjs'}

mkdir -p "${DIRECTORY}"

cp "${PROMPT}" "${DIRECTORY}/${KATA_NAME}.prompt.md"
cp "${SOLUTION}.${SUFFIX}" "${DIRECTORY}/${KATA_NAME}.solution.${SUFFIX}"
cp "${TESTS}.${SUFFIX}" "${DIRECTORY}/${KATA_NAME}.tests.${TEST_SUFFIX}"


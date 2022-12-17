Feature: Calculator

Scenario: Sum
Given Calculator
When I enter 2 numbers
| first | second |
| 2 | 2 |
And Click plus button
Then I receive sum of that numbers

Scenario: Subtract
Given Calculator
When I enter 2 numbers
| first | second |
| 2 | 2 |
And Click minus button
Then I receive subtract of that numbers

Scenario: Multiply
Given Calculator
When I enter 2 numbers
| first | second |
| 2 | 2 |
And Click multiply button
Then I receive multiply of that numbers

Scenario: Division
Given Calculator
When I enter 2 numbers
| first | second |
| 2 | 2 |
And Click divide button
Then I receive division of that numbers
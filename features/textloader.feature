Feature: yaml=>json 변환

   Scenario: 텍스트 변환
      Given "test_dialog" 텍스트 파일이 주어진다
      When id "A001"를 매개변수로 loadText 호출하면
      Then "A001" json 파일이 생성된다

   Scenario Outline: 전체 텍스트 변환
      Given <fileName> 텍스트 파일이 주어진다
      When id <id>를 매개변수로 loadText 호출하면
      Then <id> json 파일이 생성된다

      Examples:
      |fileName     |id   |
      |"test_dialog"|"A001" |
      |"test_dialog"|"A002" |
      |"test_dialog"|"A003" |



Feature: yaml=>json 변환

   Scenario: 텍스트 변환
      Given "test_dialog" 텍스트 파일이 주어진다
      When id "A001"를 매개변수로 loadText 호출하면
      Then "test_dialog" json 파일이 생성된다




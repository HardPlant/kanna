Feature: 아이디에 따른 로드

    Scenario: 아이디, 순서번호 부여
        Given TextReader 모듈이 로드되고 
        When 아이디 "A001"가 부여된다
        When 텍스트 로드를 수행하면
        Then "0"번 텍스트가 로드된다
        Then 다음 텍스트를 로드하면
        Then "1"번 텍스트가 로드된다
        
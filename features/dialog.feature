Feature: 대화상자 모델 표시

    요청하는 대화 ID를 JSON에서 표시한다

    Scenario: 대화상자 로드
        Given 스테이지 ID "A001"가 주어진다
        
        When 대화 상자 표시를 시작하면
        
        Then 해당 ID 하위 대화 모델이 로드된다
        
        When 진행하면

        Then 다음 대화 모델이 로드된다

    Scenario: 2인 대화

    Scenario: 3인 대화
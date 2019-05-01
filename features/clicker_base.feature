Feature: 클릭 시 스탯 상승

    Scenario: 카나 클릭 시 "연기력" 상승
        Given 카나 캐릭터가 주어진다
        And 클리커가 주어진다

        When 클리커에 카나 캐릭터를 적용하고
        And 카나 캐릭터를 클릭하면

        Then 연기력 스탯이 클릭 델타만큼 상승한다
    
    Scenario: 3프레임 후 "연기력" 상승 확인
        Given 카나 캐릭터가 주어진다
        And 클리커가 주어진다
        
        When 3프레임이 지나면
        
        Then 연기력 스탯이 3델타만큼 상승한다

# Feature: 일정 주기로 부스트 출현

    # Scenario: ""분 마다 부스트 출현
    #     Given 
    #     And Start to type your And step here
    #     And 
    #     When



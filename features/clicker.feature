Feature: 클릭 시 스탯 상승

    Scenario: 카나 클릭 시 "연기력" 상승
        Given 카나 캐릭터가 주어진다
        When 카나 캐릭터를 클릭하면
        Then 연기력 스탯이 상승한다
    
    

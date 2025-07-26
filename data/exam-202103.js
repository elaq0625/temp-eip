const EXAM_DATA_202103 = {
    "year": "2021",
    "round": 3,
    "categories": [
        {
            "id": 1,
            "name": "제1과목 : 소프트웨어 설계",
            "range": {
                "start": 1,
                "end": 20
            }
        },
        {
            "id": 2,
            "name": "제2과목 : 소프트웨어 개발",
            "range": {
                "start": 21,
                "end": 40
            }
        },
        {
            "id": 3,
            "name": "제3과목 : 데이터베이스 구축",
            "range": {
                "start": 41,
                "end": 60
            }
        },
        {
            "id": 4,
            "name": "제4과목 : 프로그래밍 언어 활용",
            "range": {
                "start": 61,
                "end": 80
            }
        },
        {
            "id": 5,
            "name": "제5과목 : 정보시스템 구축 관리",
            "range": {
                "start": 81,
                "end": 100
            }
        }
    ],
    "questions": [
        {
            "category_id": 1,
            "question_number": 1,
            "question_type": "multiple_choice",
            "question_description": "요구사항 검증(Requirements Validation)에 대한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "요구사항이 사용자의 요구를 정확히 반영하고 있는지 확인하는 과정이다",
                "2": "요구사항이 시스템의 제약조건을 만족하는지 검토한다",
                "3": "요구사항이 구현 가능한지 기술적으로 검증한다",
                "4": "요구사항 검증은 개발 완료 후에만 수행한다"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 2,
            "question_type": "multiple_choice",
            "question_description": "한 클래스가 다른 클래스를 연산의 매개변수로 사용하고, 그 클래스의 명세가 변경되면 다른 객체들에 영향을 미치는 UML 관계는?",
            "additional_content": null,
            "choices": {
                "1": "Association",
                "2": "Dependency",
                "3": "Realization",
                "4": "Generalization"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 3,
            "question_type": "multiple_choice",
            "question_description": "익스트림 프로그래밍(XP)에 대한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "짧은 개발 주기와 빈번한 릴리스를 통해 빠른 피드백을 얻는다",
                "2": "페어 프로그래밍을 통해 코드 품질을 향상시킨다",
                "3": "테스트 주도 개발을 통해 안정성을 확보한다",
                "4": "상세한 문서화를 우선시하여 유지보수성을 높인다"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 4,
            "question_type": "multiple_choice",
            "question_description": "소프트웨어 설계에서 사용되는 추상화 기법이 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "Data Abstraction",
                "2": "Control Abstraction",
                "3": "Procedural Abstraction",
                "4": "Intensity Abstraction"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 5,
            "question_type": "multiple_choice",
            "question_description": "객체지향 설계에서 정보 은닉(Information Hiding)에 대한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "객체의 내부 구현 세부사항을 외부로부터 숨긴다",
                "2": "캡슐화를 통해 정보 은닉을 구현한다",
                "3": "인터페이스를 통해서만 객체와 상호작용한다",
                "4": "모든 멤버 변수는 public으로 선언해야 한다"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 6,
            "question_type": "multiple_choice",
            "question_description": "소프트웨어 공학에서 모델링에 대한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "복잡한 시스템을 이해하기 쉽게 표현하는 방법이다",
                "2": "시스템의 구조와 동작을 시각적으로 나타낸다",
                "3": "모델링은 시스템 구현 후에만 수행한다",
                "4": "다양한 관점에서 시스템을 분석할 수 있다"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 7,
            "question_type": "multiple_choice",
            "question_description": "요구사항 분석에 대한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "요구사항 도출은 이해관계자로부터 요구사항을 수집하는 과정이다",
                "2": "도메인 분석은 문제 영역에 대한 이해를 높이는 활동이다",
                "3": "기능적 요구사항은 시스템이 수행해야 할 기능을 정의한다",
                "4": "요구사항 분석은 개발 완료 후에만 수행한다"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 8,
            "question_type": "multiple_choice",
            "question_description": "클래스 다이어그램의 요소 중 클래스의 행위를 나타내며, 메서드를 정의하고 UML에서 연산의 인터페이스를 제공하는 것은?",
            "additional_content": null,
            "choices": {
                "1": "Instance",
                "2": "Operation",
                "3": "Item",
                "4": "Hiding"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 9,
            "question_type": "multiple_choice",
            "question_description": "분산 시스템에서 마스터-슬레이브 아키텍처에 대한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "마스터가 작업을 슬레이브들에게 분배한다",
                "2": "슬레이브들은 독립적으로 작업을 수행한다",
                "3": "마스터는 작업 결과를 수집하고 통합한다",
                "4": "모든 노드가 동등한 권한을 가진다"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 10,
            "question_type": "multiple_choice",
            "question_description": "요구사항 정의, 분석, 설계의 결과를 표현하기 위해 모델링 과정에서 사용되지 않는 다이어그램은?",
            "additional_content": null,
            "choices": {
                "1": "Data Flow Diagram",
                "2": "UML Diagram",
                "3": "E-R Diagram",
                "4": "AVL Diagram"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 11,
            "question_type": "multiple_choice",
            "question_description": "객체지향 개념에 대한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "캡슐화는 데이터와 메서드를 하나의 단위로 묶는 것이다",
                "2": "객체는 상태와 행위를 가진 실세계의 실체이다",
                "3": "클래스는 객체를 생성하기 위한 템플릿이다",
                "4": "다형성은 하나의 메서드가 하나의 형태만 가져야 한다는 원칙이다"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 12,
            "question_type": "multiple_choice",
            "question_description": "사용자 인터페이스(User Interface)에 대한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "사용자와 시스템이 정보를 교환하기 위해 좋은 상호작용을 가능하게 하는 장치나 소프트웨어를 의미한다",
                "2": "개발자 중심으로 설계하여 유지보수가 편리해야 한다",
                "3": "학습하기 쉽고 사용하기 쉬워야 한다",
                "4": "사용자 요구사항이 UI에 반영되도록 구성되어야 한다"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 13,
            "question_type": "multiple_choice",
            "question_description": "GoF(Gang of Four) 디자인 패턴과 관련한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "목적에 따라 생성(Creational), 구조(Structural), 행위(Behavioral) 패턴으로 분류할 수 있다",
                "2": "Strategy 패턴은 인스턴스를 복제하여 사용하는 구조 패턴이다",
                "3": "행위 패턴은 클래스나 객체들이 상호작용하는 방법과 책임을 분산하는 방법을 정의한다",
                "4": "Singleton 패턴은 특정 클래스의 인스턴스가 하나만 생성되도록 보장하고 그 인스턴스에 대한 접근을 제공한다"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 14,
            "question_type": "multiple_choice",
            "question_description": "애자일 개발 방법론과 관련한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "빠른 릴리스를 통해 문제를 신속하게 파악할 수 있다",
                "2": "정확한 결과를 위해 계획과 문서화에 중점을 둔다",
                "3": "고객과의 소통을 중시한다",
                "4": "변화하는 요구사항에 적응하기에 적합하다"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 15,
            "question_type": "multiple_choice",
            "question_description": "럼바우(Rumbaugh)의 객체지향 분석 기법 중 자료 흐름도(DFD)를 주로 이용하는 것은?",
            "additional_content": null,
            "choices": {
                "1": "Functional Modeling",
                "2": "Dynamic Modeling",
                "3": "Object Modeling",
                "4": "Static Modeling"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 16,
            "question_type": "multiple_choice",
            "question_description": "순차 다이어그램(Sequence Diagram)과 관련한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "객체들 간의 상호작용을 표현하는데 사용된다",
                "2": "시간에 따른 객체들 간의 메시지 전달 과정을 중점적으로 표현한다",
                "3": "동적 다이어그램보다는 정적 다이어그램에 가깝다",
                "4": "상호작용 다이어그램의 한 종류로 볼 수 있다"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 17,
            "question_type": "multiple_choice",
            "question_description": "객체지향 분석 기법과 관련한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "동적 모델링 기법을 사용할 수 있다",
                "2": "시스템을 기능적으로 이해하기 위해 순차적 처리가 중요한 하향식 관점에서 볼 수 있다",
                "3": "데이터와 행위를 함께 묶어서 객체를 정의하고 추상화하는 작업이다",
                "4": "코드 재사용과 요구사항에 따른 시스템 변경이 용이하여 프로그램 생산성을 향상시킬 수 있다"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 18,
            "question_type": "multiple_choice",
            "question_description": "대표적으로 DOS 및 Unix 등의 운영체제에서 조작을 위해 사용하던 것으로, 정해진 명령 문자열을 입력하여 시스템을 조작하는 사용자 인터페이스(User Interface)는?",
            "additional_content": null,
            "choices": {
                "1": "GUI (Graphical User Interface)",
                "2": "CLI (Command Line Interface)",
                "3": "CUI (Cell User Interface)",
                "4": "MUI (Mobile User Interface)"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 19,
            "question_type": "multiple_choice",
            "question_description": "분산 시스템에서의 미들웨어(Middleware)와 관련한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "분산 시스템의 여러 부분을 관리하고 통신을 위해 데이터를 교환하는 소프트웨어로 볼 수 있다",
                "2": "위치 투명성을 제공한다",
                "3": "분산 시스템의 다양한 구성 요소들이 필요로 하는 재사용 가능한 서비스의 구현을 제공한다",
                "4": "애플리케이션과 사용자 간의 분산 서비스만을 제공한다"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 20,
            "question_type": "multiple_choice",
            "question_description": "소프트웨어 아키텍처와 관련한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "파이프-필터 아키텍처에서는 데이터가 파이프를 통해 양방향으로 흐르며, 필터 이동 시 오버헤드가 발생하지 않는다",
                "2": "외부에서 인식 가능한 특성을 포함하는 소프트웨어의 기본 구조로 볼 수 있다",
                "3": "데이터 중심 아키텍처는 공유 데이터 저장소를 통해 접근자들 간의 통신이 이루어져 각 접근자의 수정과 확장이 용이하다",
                "4": "이해관계자들의 품질 요구사항을 반영하여 품질 속성을 결정한다"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 21,
            "question_type": "multiple_choice",
            "question_description": "테스트를 목적에 따라 분류했을 때, 강도(Stress) 테스트에 대한 설명으로 옳은 것은?",
            "additional_content": null,
            "choices": {
                "1": "시스템에 의도적인 장애를 유발하고 시스템이 정상적으로 복구되는지 테스트한다",
                "2": "과도한 정보로 시스템에 과부하를 주고 과부하 상태에서도 시스템이 정상적으로 동작하는지 테스트한다",
                "3": "시스템이 사용자 이벤트에 응답하는 시간, 특정 시간 내에 처리하는 작업량, 사용자 요청에 대한 시스템의 응답 속도를 테스트한다",
                "4": "무단 및 불법 침입을 시도하고 보안 시스템이 불법 침입을 효과적으로 차단하는지 테스트한다"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 22,
            "question_type": "multiple_choice",
            "question_description": "다음 자료를 버블 정렬을 이용하여 오름차순으로 정렬할 경우 PASS 3의 결과는?",
            "additional_content": "**자료:** 9, 6, 7, 3, 5",
            "choices": {
                "1": "6, 3, 5, 7, 9",
                "2": "3, 5, 6, 7, 9",
                "3": "6, 7, 3, 5, 9",
                "4": "3, 5, 9, 6, 7"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 23,
            "question_type": "multiple_choice",
            "question_description": "다음 그래프에서 정점 A를 선택하여 깊이 우선 탐색(DFS)으로 운행한 결과는?",
            "additional_content": "**그래프 구조:**\n- 정점 A는 B, C, D와 연결\n- 정점 B는 A, E와 연결\n- 정점 C는 A, E, F와 연결\n- 정점 D는 A, F와 연결\n- 정점 E는 B, C, G와 연결\n- 정점 F는 C, D, G와 연결\n- 정점 G는 E, F와 연결",
            "choices": {
                "1": "ABECDFG",
                "2": "ABECFDG",
                "3": "ABCDEFG",
                "4": "ABEFGCD"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 24,
            "question_type": "multiple_choice",
            "question_description": "다음 설명에 부합하는 용어로 옳은 것은?",
            "additional_content": "**설명:**\n• 소프트웨어 구조를 형성하며 다른 것들과 구분되는 독립적인 기능 단위이다\n• 하나 또는 여러 개의 논리적 기능을 수행하는 명령들의 집합으로 설명할 수 있다\n• 함께 조립되어 완전한 프로그램을 형성할 수 있다",
            "choices": {
                "1": "Integrated Program",
                "2": "Repository",
                "3": "Module",
                "4": "Data"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 25,
            "question_type": "multiple_choice",
            "question_description": "테스트 드라이버(Test Driver)에 대한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "테스트 대상 모듈을 호출하는 간단한 소프트웨어이다",
                "2": "필요에 따라 매개변수를 전달하고 모듈 실행 후 결과를 보여줄 수 있다",
                "3": "하향식 통합 테스트에서 사용된다",
                "4": "테스트 대상 모듈이 호출하는 하위 모듈의 역할을 한다"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 26,
            "question_type": "multiple_choice",
            "question_description": "다음 중 선형 구조로만 묶인 것은?",
            "additional_content": null,
            "choices": {
                "1": "Stack, Tree",
                "2": "Queue, Deque",
                "3": "Queue, Graph",
                "4": "List, Graph"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 27,
            "question_type": "multiple_choice",
            "question_description": "다음은 스택의 자료 삭제 알고리즘이다. ⓐ에 들어갈 내용으로 옳은 것은? (단, Top: 스택포인터, S: 스택의 이름)",
            "additional_content": "```\nif Top = 0 Then\n(\n    ⓐ\nElse {\n}\n)\nremove S(Top)\nTop = Top - 1\n```",
            "choices": {
                "1": "Overflow",
                "2": "Top = Top + 1",
                "3": "Underflow",
                "4": "Top = Top"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 28,
            "question_type": "multiple_choice",
            "question_description": "제품 소프트웨어의 사용자 매뉴얼 작성절차로 (가)~(다)와 [보기]의 기호를 바르게 연결한 것은?",
            "additional_content": "**절차:**\n시작 → (가) → (나) → (다) → 사용설명서\n\n**추가 정보:**\n- 컴포넌트 명세서\n- 컴포넌트 구현 설계서\n\n**[보기]**\n⑦ 사용 설명서 검토\n① 구성 요소별 내용 작성\n© 사용 설명서 구성 요소 정의",
            "choices": {
                "1": "(가)-⑦, (나)-①, (다)-©",
                "2": "(가)-©, (나)-①, (다)-⑦",
                "3": "(가)-⑦, (나)-©, (다)-①",
                "4": "(가)-©, (나)-⑦, (다)-①"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 29,
            "question_type": "multiple_choice",
            "question_description": "순서가 A, B, C, D로 정해진 입력 자료를 스택에 입력한 후 출력한 결과로 불가능한 것은?",
            "additional_content": null,
            "choices": {
                "1": "D, C, B, A",
                "2": "B, C, D, A",
                "3": "C, B, A, D",
                "4": "D, B, C, A"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 30,
            "question_type": "multiple_choice",
            "question_description": "소프트웨어 테스트에서 검증(Verification)과 확인(Validation)에 대한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "소프트웨어 테스트에서 검증과 확인을 구분하는 것은 발견할 결함의 유형을 명확히 하는데 도움이 된다",
                "2": "검증은 소프트웨어 개발 과정을 테스트하고, 확인은 소프트웨어 결과를 테스트한다",
                "3": "검증은 작업 산출물이 명세서의 기능적 및 비기능적 요구사항을 얼마나 잘 준수하는지 측정하는 작업이다",
                "4": "검증은 작업 산출물이 사용자 요구사항에 적합한지 측정하고, 확인은 작업 산출물이 개발자 기대사항을 만족하는지 측정한다"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 31,
            "question_type": "multiple_choice",
            "question_description": "개별 모듈을 시험하는 것으로, 모듈이 정확하게 구현되었는지, 예정한 기능이 제대로 수행되는지를 점검하는 것이 주목적인 테스트는?",
            "additional_content": null,
            "choices": {
                "1": "Integration Test",
                "2": "Unit Test",
                "3": "System Test",
                "4": "Acceptance Test"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 32,
            "question_type": "multiple_choice",
            "question_description": "형상 관리의 개념과 절차에 대한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "형상 식별은 형상 관리 계획에 따라 형상 관리 대상이 되는 것을 식별하는 과정이다",
                "2": "형상 관리는 가시성과 추적성을 보장하여 소프트웨어 생산성과 품질을 향상시킬 수 있다",
                "3": "형상 통제 과정에서 형상 항목에 대한 변경 요청은 즉시 수용하고 반영해야 한다",
                "4": "형상 감사는 형상 관리가 형상 관리 계획에 따라 진행되고 있는지, 형상 항목의 변경이 요구사항에 따라 적절히 이루어지고 있는지 확인하는 활동이다"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 33,
            "question_type": "multiple_choice",
            "question_description": "소스 코드 정적 분석(Static Analysis)에 대한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "소스 코드를 실행하지 않고 분석한다",
                "2": "코드에서 오류나 잠재적 오류를 찾는 활동이다",
                "3": "코드 분석은 하드웨어적 방법으로만 가능하다",
                "4": "데이터 흐름이나 제어 흐름을 분석하여 비정상적인 패턴을 찾을 수 있다"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 34,
            "question_type": "multiple_choice",
            "question_description": "소프트웨어 개발 활동을 수행함에 있어서 시스템이 고장(Failure)을 일으키게 하며, 오류(Error)가 있는 경우 발생하는 것은?",
            "additional_content": null,
            "choices": {
                "1": "Fault",
                "2": "Testcase",
                "3": "Mistake",
                "4": "Inspection"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 35,
            "question_type": "multiple_choice",
            "question_description": "코드의 간결성을 유지하기 위해 사용되는 지침으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "문장 그룹과 주석을 명확히 구분하기 위해 공백을 사용한다",
                "2": "복잡한 논리식과 산술식을 괄호와 들여쓰기를 통해 명확하게 표현한다",
                "3": "선언부와 구현부를 구분하기 위해 빈 줄을 사용한다",
                "4": "한 줄에 가능한 한 많은 문장을 코딩한다"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 36,
            "question_type": "multiple_choice",
            "question_description": "소프트웨어 품질 목표 중 하나 이상의 하드웨어 환경에서 운용되기 위해 쉽게 수정될 수 있는 시스템 능력을 의미하는 것은?",
            "additional_content": null,
            "choices": {
                "1": "Portability",
                "2": "Efficiency",
                "3": "Usability",
                "4": "Correctness"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 37,
            "question_type": "multiple_choice",
            "question_description": "다음 중 최악의 경우 검색 효율이 가장 나쁜 트리 구조는?",
            "additional_content": null,
            "choices": {
                "1": "Binary Search Tree",
                "2": "AVL Tree",
                "3": "2-3 Tree",
                "4": "Red-Black Tree"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 38,
            "question_type": "multiple_choice",
            "question_description": "다음 트리에 대한 중위 순회 운행 결과는?",
            "additional_content": "**트리 구조:**\n- 루트: A\n- A의 왼쪽 자식: B\n- A의 오른쪽 자식: C\n- B의 왼쪽 자식: D\n- C의 왼쪽 자식: E\n- C의 오른쪽 자식: F",
            "choices": {
                "1": "ABDCEF",
                "2": "ABCDEF",
                "3": "DBECFA",
                "4": "DBAECF"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 39,
            "question_type": "multiple_choice",
            "question_description": "테스트 케이스 자동 생성 도구를 이용하여 테스트 데이터를 찾아내는 방법이 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "스터브(Stub)와 드라이버(Driver)",
                "2": "입력 도메인 분석",
                "3": "랜덤(Random) 테스트",
                "4": "자료 흐름도"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 40,
            "question_type": "multiple_choice",
            "question_description": "저작권 관리 구성 요소 중 패키저(Packager)의 주요 역할로 옳은 것은?",
            "additional_content": null,
            "choices": {
                "1": "콘텐츠를 제공하는 저작권자를 의미한다",
                "2": "콘텐츠를 메타 데이터와 함께 배포 가능한 단위로 묶는다",
                "3": "라이선스를 발급하고 관리한다",
                "4": "배포된 콘텐츠의 이용 권한을 통제한다"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 41,
            "question_type": "multiple_choice",
            "question_description": "데이터베이스의 무결성 규정(Integrity Rule)과 관련한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "무결성 규정에는 데이터가 만족해야 될 제약 조건, 규정을 참조할 때 사용하는 식별자 등의 요소가 포함될 수 있다",
                "2": "무결성 규정의 대상으로는 도메인, 키, 종속성 등이 있다",
                "3": "정식으로 허가 받은 사용자가 아닌 불법적인 사용자에 의한 갱신으로부터 데이터베이스를 보호하기 위한 규정이다",
                "4": "릴레이션 무결성 규정(Relation Integrity Rules)은 릴레이션을 조작하는 과정에서의 의미적 관계(Semantic Relationship)를 명세한 것이다"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 42,
            "question_type": "multiple_choice",
            "question_description": "데이터베이스에서 하나의 논리적 기능을 수행하기 위한 작업의 단위 또는 한꺼번에 모두 수행되어야 할 일련의 연산들을 의미하는 것은?",
            "additional_content": null,
            "choices": {
                "1": "트랜잭션",
                "2": "뷰",
                "3": "튜플",
                "4": "카디널리티"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 43,
            "question_type": "multiple_choice",
            "question_description": "다음 두 릴레이션 R1과 R2의 카티션 프로덕트(Cartesian Product) 수행 결과는?",
            "additional_content": "**R1 테이블:**\n| 학년 | 학과 |\n|------|------|\n| 1 | 컴퓨터 |\n| 2 | 국문 |\n| 3 | 수학 |\n\n**R2 테이블:**\n| 학년 | 학과 |\n|------|------|\n| 1 | 컴퓨터 |\n| 2 | 국문 |\n| 3 | 수학 |",
            "choices": {
                "1": "2개 컬럼(학년, 학과)과 3개 행(1, 컴퓨터; 2, 국문; 3, 수학)을 가진 테이블",
                "2": "2개 컬럼(학년, 학과)과 3개 행(2, 컴퓨터; 2, 국문; 2, 수학)을 가진 테이블",
                "3": "2개 컬럼(학년, 학과)과 3개 행(3, 컴퓨터; 3, 국문; 3, 수학)을 가진 테이블",
                "4": "4개 컬럼(학년, 학과, 학년, 학과)과 9개 행을 가진 테이블로 R1과 R2의 카티션 프로덕트 결과"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 44,
            "question_type": "multiple_choice",
            "question_description": "물리적 데이터베이스 설계에 대한 설명으로 거리가 먼 것은?",
            "additional_content": null,
            "choices": {
                "1": "물리적 설계의 목적은 효율적인 방법으로 데이터를 저장하는 것이다",
                "2": "트랜잭션 처리량과 응답시간, 디스크 용량 등을 고려해야 한다",
                "3": "저장 레코드의 형식, 순서, 접근 경로와 같은 정보를 사용하여 설계한다",
                "4": "트랜잭션의 인터페이스를 설계하며, 데이터 타입 및 데이터 타입들 간의 관계로 표현한다"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 45,
            "question_type": "multiple_choice",
            "question_description": "다음 중 기본키는 NULL 값을 가져서는 안되며, 릴레이션 내에 오직 하나의 값만 존재해야 한다는 조건을 무엇이라 하는가?",
            "additional_content": null,
            "choices": {
                "1": "개체 무결성 제약조건",
                "2": "참조 무결성 제약조건",
                "3": "도메인 무결성 제약조건",
                "4": "속성 무결성 제약조건"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 46,
            "question_type": "multiple_choice",
            "question_description": "SQL문에서 HAVING을 사용할 수 있는 절은?",
            "additional_content": null,
            "choices": {
                "1": "LIKE 절",
                "2": "WHERE 절",
                "3": "GROUP BY 절",
                "4": "ORDER BY 절"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 47,
            "question_type": "multiple_choice",
            "question_description": "관계 데이터베이스에 있어서 관계 대수 연산이 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "디비전(Division)",
                "2": "프로젝트(Project)",
                "3": "조인(Join)",
                "4": "포크(Fork)"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 48,
            "question_type": "multiple_choice",
            "question_description": "학적 테이블에서 전화번호가 Null 값이 아닌 학생명을 모두 검색할 때, SQL 구문으로 옳은 것은?",
            "additional_content": null,
            "choices": {
                "1": "SELECT 학생명 FROM 학적 WHERE 전화번호 DON'T NULL;",
                "2": "SELECT 학생명 FROM 학적 WHERE 전화번호 != NOT NULL;",
                "3": "SELECT 학생명 FROM 학적 WHERE 전화번호 IS NOT NULL;",
                "4": "SELECT 학생명 FROM 학적 WHERE 전화번호 IS NULL;"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 49,
            "question_type": "multiple_choice",
            "question_description": "관계형 데이터베이스에서 다음 설명에 해당하는 키(Key)는?",
            "additional_content": "**설명:** 한 릴레이션 내의 속성들의 집합으로 구성된 키로서, 릴레이션을 구성하는 모든 튜플에 대한 유일성은 만족시키지만 최소성은 만족시키지 못한다",
            "choices": {
                "1": "후보키",
                "2": "대체키",
                "3": "슈퍼키",
                "4": "외래키"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 50,
            "question_type": "multiple_choice",
            "question_description": "데이터베이스에서 인덱스(Index)와 관련한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "인덱스의 기본 목적은 검색 성능을 최적화하는 것으로 볼 수 있다",
                "2": "B-트리 인덱스는 분기를 목적으로 하는 Branch Block을 가지고 있다",
                "3": "BETWEEN 등 범위(Range) 검색에 활용될 수 있다",
                "4": "시스템이 자동으로 생성하여 사용자가 변경할 수 없다"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 51,
            "question_type": "multiple_choice",
            "question_description": "로킹 단위(Locking Granularity)에 대한 설명으로 옳은 것은?",
            "additional_content": null,
            "choices": {
                "1": "로킹 단위가 크면 병행성 수준이 낮아진다",
                "2": "로킹 단위가 크면 병행 제어 기법이 복잡해진다",
                "3": "로킹 단위가 작으면 로크(lock)의 수가 적어진다",
                "4": "로킹은 파일 단위로 이루어지며, 레코드와 필드는 로킹 단위가 될 수 없다"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 52,
            "question_type": "multiple_choice",
            "question_description": "관계 대수에 대한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "원하는 릴레이션을 정의하는 방법을 제공하며 비절차적 언어이다",
                "2": "릴레이션 조작을 위한 연산의 집합으로 피연산자와 결과가 모두 릴레이션이다",
                "3": "일반 집합 연산과 순수 관계 연산으로 구분된다",
                "4": "질의에 대한 해를 구하기 위해 수행해야 할 연산의 순서를 명시한다"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 53,
            "question_type": "multiple_choice",
            "question_description": "데이터 중복으로 인해 관계 연산을 처리할 때 예상치 못한 곤란함이 발생하는 것을 무엇이라 하는가?",
            "additional_content": null,
            "choices": {
                "1": "Anomaly",
                "2": "Restriction",
                "3": "Dependency",
                "4": "Translation"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 54,
            "question_type": "multiple_choice",
            "question_description": "다음 중 SQL의 DDL(Data Definition Language) 문이 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "CREATE",
                "2": "DELETE",
                "3": "ALTER",
                "4": "DROP"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 55,
            "question_type": "multiple_choice",
            "question_description": "다음 중 정규화에 대한 설명으로 적절하지 않은 것은?",
            "additional_content": null,
            "choices": {
                "1": "데이터베이스 개념 설계 단계 이전에 수행한다",
                "2": "데이터 구조의 안정성을 극대화한다",
                "3": "중복을 제거하여 삽입, 삭제, 갱신 시의 이상을 방지한다",
                "4": "데이터 삽입 시 릴레이션 재구성의 필요성을 줄인다"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 56,
            "question_type": "multiple_choice",
            "question_description": "트랜잭션의 주요 특성 중 두 개 이상의 트랜잭션이 동시에 실행될 때, 하나의 트랜잭션 실행 중에는 다른 트랜잭션의 연산이 간섭할 수 없다는 것은?",
            "additional_content": null,
            "choices": {
                "1": "Log",
                "2": "Consistency",
                "3": "Isolation",
                "4": "Durability"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 57,
            "question_type": "multiple_choice",
            "question_description": "다음 중 SQL의 논리 연산자가 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "AND",
                "2": "OTHER",
                "3": "OR",
                "4": "NOT"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 58,
            "question_type": "multiple_choice",
            "question_description": "병행 제어를 위한 직렬화 기법 중 트랜잭션의 처리 순서를 미리 정하는 기법은?",
            "additional_content": null,
            "choices": {
                "1": "로킹 기법",
                "2": "타임스탬프 기법",
                "3": "검증 기법",
                "4": "배타적 로킹 기법"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 59,
            "question_type": "multiple_choice",
            "question_description": "이전 정규형을 만족하면서 후보키에 의존하지 않는 조인 종속성(JD)을 제거한 정규형은?",
            "additional_content": null,
            "choices": {
                "1": "3정규형",
                "2": "4정규형",
                "3": "5정규형",
                "4": "6정규형"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 60,
            "question_type": "multiple_choice",
            "question_description": "릴레이션 R에서 X의 각 값에 대하여 시간에 관계없이 항상 Y의 값이 하나씩 대응될 때 Y는 X에 함수적으로 종속한다고 정의한다. 이 함수적 종속성을 올바르게 표기한 것은?",
            "additional_content": null,
            "choices": {
                "1": "Y → X",
                "2": "Y C X",
                "3": "X → Y",
                "4": "X C Y"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 61,
            "question_type": "multiple_choice",
            "question_description": "모듈 내의 구성 요소들이 동시에 서로 다른 기능을 수행할 때의 응집도는?",
            "additional_content": null,
            "choices": {
                "1": "시간적 응집도",
                "2": "논리적 응집도",
                "3": "우연적 응집도",
                "4": "순차적 응집도"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 62,
            "question_type": "multiple_choice",
            "question_description": "다음 중 오류 제어를 위해 사용되는 자동 재전송 요구(ARQ) 방식이 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "Stop-and-wait ARQ",
                "2": "Go-back-N ARQ",
                "3": "Selective-Repeat ARQ",
                "4": "Non-Acknowledge ARQ"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 63,
            "question_type": "multiple_choice",
            "question_description": "다음 Python 함수의 실행 결과는?",
            "additional_content": "```python\ndef cs(n):\n    if n == 0:\n        return 0\n    else:\n        return n + cs(n-1)\n\nprint(cs(11))\n```",
            "choices": {
                "1": "45",
                "2": "55",
                "3": "66",
                "4": "78"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 64,
            "question_type": "multiple_choice",
            "question_description": "다음 C 프로그램의 실행 결과는?",
            "additional_content": "```c\n#include <stdio.h>\n#include <string.h>\nint main() {\n    char str[20] = \"nation\";\n    char *p2 = \"alter\";\n    strcat(str, p2);\n    printf(\"%s\", str);\n    return 0;\n}\n```",
            "choices": {
                "1": "nation",
                "2": "nationalter",
                "3": "alter",
                "4": "alternation"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 65,
            "question_type": "multiple_choice",
            "question_description": "JAVA에서 참조 값이 담긴 변수가 사라지거나 변수 자체가 사라져서 더 이상 사용되지 않는 객체가 Heap에 남아있을 때, 이러한 객체를 제거하는 모듈은?",
            "additional_content": null,
            "choices": {
                "1": "Heap Collector",
                "2": "Garbage Collector",
                "3": "Memory Collector",
                "4": "Variable Collector"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 66,
            "question_type": "multiple_choice",
            "question_description": "다음 C 프로그램의 실행 결과는?",
            "additional_content": "```c\n#include <stdio.h>\nint main() {\n    int a = 3, b = 4, c = 5;\n    int r1, r2, r3;\n    r1 = (a > b) && (b > c);\n    r2 = (a < b) || (b > c);\n    r3 = (a == b) && (b != c);\n    printf(\"%d\", r1 + r2 + r3);\n    return 0;\n}\n```",
            "choices": {
                "1": "0",
                "2": "1",
                "3": "2",
                "4": "3"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 67,
            "question_type": "multiple_choice",
            "question_description": "다음 중 JAVA에서 연산자 우선순위가 가장 낮은 것은?",
            "additional_content": null,
            "choices": {
                "1": "--",
                "2": "%",
                "3": "&",
                "4": "="
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 68,
            "question_type": "multiple_choice",
            "question_description": "사용자가 요청한 디스크 I/O 내용이 큐에 있을 때, SSTF(Shortest Seek Time First) 스케줄링을 사용한 처리 순서는? (현재 헤드 위치: 53, 최내측 트랙: 1, 최외측 트랙: 200)",
            "additional_content": "**큐 내용:** 98, 183, 37, 122, 14, 124, 65, 67",
            "choices": {
                "1": "53 → 65 → 67 → 37 → 14 → 98 → 122 → 124 → 183",
                "2": "53 → 37 → 14 → 65 → 67 → 98 → 122 → 124 → 183",
                "3": "53 → 65 → 67 → 98 → 122 → 124 → 183 → 37 → 14",
                "4": "53 → 67 → 65 → 98 → 122 → 124 → 183 → 37 → 14"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 69,
            "question_type": "multiple_choice",
            "question_description": "192.168.1.0/24 네트워크를 FLSM으로 4개의 서브넷으로 분할할 때, IP Subnet-zero를 사용한다면 4번째 서브넷의 4번째 사용 가능한 IP 주소는?",
            "additional_content": null,
            "choices": {
                "1": "192.168.1.192",
                "2": "192.168.1.195",
                "3": "192.168.1.196",
                "4": "192.168.1.198"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 70,
            "question_type": "multiple_choice",
            "question_description": "다음 중 Class C에 속하는 IP 주소는?",
            "additional_content": null,
            "choices": {
                "1": "200.168.30.1",
                "2": "10.3.2.1",
                "3": "225.2.4.1",
                "4": "172.16.98.3"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 71,
            "question_type": "multiple_choice",
            "question_description": "다음 C 프로그램의 실행 결과는?",
            "additional_content": "```c\n#include <stdio.h>\nint main(void) {\n    int n = 4;\n    int* pt = NULL;\n    pt = &n;\n    printf(\"%d\", &n + *pt - *&pt + n);\n    return 0;\n}\n```",
            "choices": {
                "1": "0",
                "2": "4",
                "3": "8",
                "4": "12"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 72,
            "question_type": "multiple_choice",
            "question_description": "Guido van Rossum이 발표한 스크립트 언어로, 인터프리터 기반이며 객체지향적이고 학습이 쉬우며 이식성이 높은 언어는?",
            "additional_content": null,
            "choices": {
                "1": "C++",
                "2": "JAVA",
                "3": "C#",
                "4": "Python"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 73,
            "question_type": "multiple_choice",
            "question_description": "다음 JAVA 프로그램의 실행 결과는?",
            "additional_content": "```java\npublic class ovr {\n    public static void main(String[] args) {\n        int[] arr = new int[10];\n        int i = 0;\n        arr[0] = 0;\n        arr[1] = 1;\n        while(i < 8) {\n            arr[i + 2] = arr[i + 1] + arr[i];\n            i++;\n        }\n        System.out.println(arr[9]);\n    }\n}\n```",
            "choices": {
                "1": "13",
                "2": "21",
                "3": "34",
                "4": "55"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 74,
            "question_type": "multiple_choice",
            "question_description": "다음 중 프로세스에 대한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "Dispatch는 준비 상태의 프로세스를 실행 상태로 전환하는 작업이다",
                "2": "PCB(Process Control Block)는 프로세스의 상태 정보를 저장하는 자료구조이다",
                "3": "Context Switching은 CPU가 현재 프로세스에서 다른 프로세스로 전환하는 작업이다",
                "4": "프로세스는 스레드보다 더 작은 실행 단위이다"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 75,
            "question_type": "multiple_choice",
            "question_description": "다음 중 모듈의 독립성을 높이기 위한 결합도(Coupling)에 대한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "Ripple effect는 한 모듈의 변경이 다른 모듈에 영향을 미치는 현상이다",
                "2": "인터페이스 설정을 통해 결합도를 낮출 수 있다",
                "3": "변수나 제어 정보를 공유하면 결합도가 높아진다",
                "4": "전역 변수를 사용하는 것이 매개변수를 사용하는 것보다 결합도가 낮다"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 76,
            "question_type": "multiple_choice",
            "question_description": "다음 중 TCP 헤더에 대한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "Sequence Number는 데이터의 순서를 보장한다",
                "2": "Acknowledgement Number는 다음에 받을 데이터의 번호를 나타낸다",
                "3": "Checksum은 데이터 무결성을 검사한다",
                "4": "Window size는 수신 버퍼의 크기를 나타낸다"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 77,
            "question_type": "multiple_choice",
            "question_description": "다음 중 모듈성(Modularity)에 대한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "모듈은 서브루틴이나 함수로 구성된다",
                "2": "모듈의 수가 증가하면 모듈의 크기와 상호작용이 증가한다",
                "3": "모듈성은 시스템 관리와 복잡성을 위해 필요하다",
                "4": "모듈성은 유지보수와 수정을 위해 필요하다"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 78,
            "question_type": "multiple_choice",
            "question_description": "다음 중 페이지 교체 알고리즘이 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "FIFO",
                "2": "LFU",
                "3": "Optimal",
                "4": "LRU"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 79,
            "question_type": "multiple_choice",
            "question_description": "다음 중 C 언어에서 변수 선언이 잘못된 것은?",
            "additional_content": null,
            "choices": {
                "1": "int else;",
                "2": "int Test2;",
                "3": "int pc;",
                "4": "int True;"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 80,
            "question_type": "multiple_choice",
            "question_description": "다음 중 파일 디스크립터(File Descriptor)에 대한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "파일 관리를 위한 목적으로 사용된다",
                "2": "보조 기억장치에 저장된다",
                "3": "사용자가 직접 접근할 수 있다",
                "4": "File Control Block이라고도 한다"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 81,
            "question_type": "multiple_choice",
            "question_description": "다음 중 침입 탐지 시스템(IDS)에 대한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "Anomaly Detection은 Signature Base/Knowledge Base 방식이다",
                "2": "HIDS(Host-Based IDS)는 사용자 활동을 추적한다",
                "3": "NIDS(Network-Based IDS)의 예로는 Snort가 있다",
                "4": "IDS는 DMZ에 설치한다"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 82,
            "question_type": "multiple_choice",
            "question_description": "정보시스템에서 주체가 특정 객체에 접근하려고 할 때, 보안 레이블에 기반하여 높은 보안 수준을 요구하는 정보(객체)가 낮은 보안 수준을 가진 주체에게 노출되지 않도록 하는 접근 제어 방식은?",
            "additional_content": null,
            "choices": {
                "1": "Mandatory Access Control",
                "2": "User Access Control",
                "3": "Discretionary Access Control",
                "4": "Data-Label Access Control"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 83,
            "question_type": "multiple_choice",
            "question_description": "Google의 Google Brain 팀에서 개발하여 공개한 오픈소스 머신러닝 라이브러리는?",
            "additional_content": null,
            "choices": {
                "1": "Tajo",
                "2": "One Seg",
                "3": "Foursquare",
                "4": "TensorFlow"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 84,
            "question_type": "multiple_choice",
            "question_description": "한국의 IT 서비스 경쟁력 강화를 목표로 개발된 오픈 클라우드 컴퓨팅 플랫폼으로, 인프라 제어 및 관리 환경, 실행 환경, 개발 환경, 서비스 환경, 운영 환경으로 구성된 것은?",
            "additional_content": null,
            "choices": {
                "1": "N2OS",
                "2": "PaaS-TA",
                "3": "KAWS",
                "4": "Metaverse"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 85,
            "question_type": "multiple_choice",
            "question_description": "정보보안의 접근 제어에 대한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "적절한 권한을 가진 인가된 사용자만 특정 시스템이나 정보에 접근할 수 있도록 제어한다",
                "2": "시스템과 네트워크의 가장 기본적인 접근 제어 수단은 IP와 서비스 포트로 볼 수 있다",
                "3": "DBMS에 보안 정책을 적용하는 도구인 XDMCP를 통해 데이터베이스에 대한 접근 제어를 수행한다",
                "4": "네트워크 장비에서 수행하는 IP 접근 제어에는 관리 인터페이스 접근 제어와 ACL(Access Control List)이 포함된다"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 86,
            "question_type": "multiple_choice",
            "question_description": "소프트웨어 개발 프레임워크에 대한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "반제품을 기반으로 각 도메인에 필요한 서비스 컴포넌트를 사용하여 재사용성 증대와 성능 보장이 가능한 개발 소프트웨어이다",
                "2": "개발할 애플리케이션의 일부가 이미 구현되어 있어 반복적인 로직을 줄일 수 있다",
                "3": "라이브러리와 달리 사용자 코드가 호출할 때 소프트웨어 개발 프레임워크는 코드의 흐름을 직접 제어할 수 없다",
                "4": "생산성 향상과 유지보수성 등의 장점을 가지고 있다"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 87,
            "question_type": "multiple_choice",
            "question_description": "물리적 배치와 관계없이 LAN을 논리적으로 구성하여 Broadcast Domain을 분리할 수 있고, 연결된 장비의 성능과 보안 향상 효과를 가져오는 기술은?",
            "additional_content": null,
            "choices": {
                "1": "VLAN",
                "2": "STP",
                "3": "L2AN",
                "4": "ARP"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 88,
            "question_type": "multiple_choice",
            "question_description": "SQL Injection 공격에 대한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "SQL Injection은 애플리케이션에 임의로 작성한 SQL문을 삽입하는 공격 방법이다",
                "2": "SQL Injection 취약점은 주로 웹 애플리케이션과 데이터베이스가 연동되는 부분에서 발생한다",
                "3": "SQL Injection 공격 기법은 DBMS 종류에 관계없이 모두 동일하다",
                "4": "웹 애플리케이션이 로그인 등 사용자 입력을 기반으로 한 SQL문으로 데이터베이스에 데이터를 요청할 때 SQL Injection이 수행될 수 있다"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 89,
            "question_type": "multiple_choice",
            "question_description": "다음 중 소수를 사용하는 비대칭 암호화 알고리즘은?",
            "additional_content": null,
            "choices": {
                "1": "DES",
                "2": "AES",
                "3": "SMT",
                "4": "RSA"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 90,
            "question_type": "multiple_choice",
            "question_description": "서버 가상화와 유사하게 가상화를 적용하여 필요한 만큼의 공간을 사용하고, 컴퓨팅 소프트웨어에 의해 정의되는 데이터 저장 시스템으로, 특정 조직 내에서 여러 저장장치를 하나로 관리하고 운영하는 컴퓨터 환경이며, 저장 자원을 효율적으로 분할하는 방법으로 이해할 수 있는 IT 저장 기술은?",
            "additional_content": null,
            "choices": {
                "1": "Software Defined Storage",
                "2": "Distribution Oriented Storage",
                "3": "Network Architected Storage",
                "4": "Systematic Network Storage"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 91,
            "question_type": "multiple_choice",
            "question_description": "Cocomo 모델에서 조직 내에서 개발되는 소규모 프로젝트(5만 라인 미만의 코드)로 배치 데이터 처리, 과학/기술 계산, 비즈니스 데이터 처리에 사용되는 소프트웨어 유형은?",
            "additional_content": null,
            "choices": {
                "1": "Embedded",
                "2": "Organic",
                "3": "Semi-detached",
                "4": "Semi-embedded"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 92,
            "question_type": "multiple_choice",
            "question_description": "개인, 기업, 국가에 큰 위협이 되는 주요 사이버 범죄 중 하나로, 시스템을 잠그거나 데이터를 암호화하여 사용할 수 없게 만든 후(Snake, Darkside 등) 몸값을 요구하는 악성 프로그램은?",
            "additional_content": null,
            "choices": {
                "1": "Format String",
                "2": "Ransomware",
                "3": "Buffer overflow",
                "4": "Adware"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 93,
            "question_type": "multiple_choice",
            "question_description": "가장 오래된 소프트웨어 생명주기 모델로, 많은 적용 사례가 있지만 요구사항 변경이 어렵고, 다음 단계로 진행하기 전에 각 단계의 결과를 검증해야 하며, 선형 순차 또는 고전적 생명주기 모델이라고도 하는 것은?",
            "additional_content": null,
            "choices": {
                "1": "Waterfall Model",
                "2": "Prototype Model",
                "3": "Cocomo Model",
                "4": "Spiral Model"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 94,
            "question_type": "multiple_choice",
            "question_description": "소프트웨어 생명주기 모델 중 Spiral Model에 대한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "상대적으로 대규모 시스템에 적합하다",
                "2": "계획 및 정의, 위험 분석, 엔지니어링 개발, 고객 평가 순서로 개발이 진행된다",
                "3": "소프트웨어 개발 과정에서 발생할 수 있는 위험을 관리하고 최소화하는 것이 목적이다",
                "4": "계획, 설계, 개발, 평가의 개발 주기는 한 번만 수행된다"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 95,
            "question_type": "multiple_choice",
            "question_description": "특정 사이트에 매우 많은 수의 ICMP Echo 요청을 보내 시스템이 응답하기 위해 모든 자원을 사용하게 하여 정상적인 운영을 방해하는 공격 방법은?",
            "additional_content": null,
            "choices": {
                "1": "Role-Based Access Control",
                "2": "Ping Flood",
                "3": "Brute-Force",
                "4": "Trojan Horses"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 96,
            "question_type": "multiple_choice",
            "question_description": "TCP/IP 기반 네트워크에서 동작하는 발행 구독 기반의 메시징 프로토콜로 최근 IoT 환경에서 자주 사용되고 있는 프로토콜은?",
            "additional_content": null,
            "choices": {
                "1": "MLFQ",
                "2": "MQTT",
                "3": "Zigbee",
                "4": "MTSP"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 97,
            "question_type": "multiple_choice",
            "question_description": "시스템이 몇 대가 되어도 하나의 시스템에서 인증에 성공하면 다른 시스템에 대한 접근 권한도 얻는 시스템을 의미하는 것은?",
            "additional_content": null,
            "choices": {
                "1": "SOS",
                "2": "SBO",
                "3": "SSO",
                "4": "SOA"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 98,
            "question_type": "multiple_choice",
            "question_description": "시스템에 저장되는 패스워드들은 Hash 또는 암호화 알고리즘의 결과 값으로 저장된다. 이때 암호 공격을 막기 위해 똑같은 패스워드들이 다른 암호 값으로 저장되도록 추가되는 값을 의미하는 것은?",
            "additional_content": null,
            "choices": {
                "1": "Pass flag",
                "2": "Bucket",
                "3": "Opcode",
                "4": "Salt"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 99,
            "question_type": "multiple_choice",
            "question_description": "S/W 각 기능의 원시 코드 라인수의 비관치, 낙관치, 기대치를 측정하여 예측치를 구하고 이를 이용하여 비용을 산정하는 기법은?",
            "additional_content": null,
            "choices": {
                "1": "Effort Per Task 기법",
                "2": "전문가 감정 기법",
                "3": "델파이 기법",
                "4": "LOC 기법"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 100,
            "question_type": "multiple_choice",
            "question_description": "오픈소스 웹 애플리케이션 보안 프로젝트로서 주로 웹을 통한 정보 유출, 악성 파일 및 스크립트, 보안 취약점 등을 연구하는 곳은?",
            "additional_content": null,
            "choices": {
                "1": "WWW",
                "2": "OWASP",
                "3": "WBSEC",
                "4": "ITU"
            },
            "score": 1
        }
    ]
} 
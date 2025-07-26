const EXAM_DATA_202303 = {
    "year": "2023",
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
            "question_description": "럼바우(Rumbaugh)의 객체지향 분석 절차를 가장 바르게 나열한 것은?",
            "additional_content": null,
            "choices": {
                "1": "객체 모형 → 동적 모형 → 기능 모형",
                "2": "객체 모형 → 기능 모형 → 동적 모형",
                "3": "기능 모형 → 동적 모형 → 객체 모형",
                "4": "기능 모형 → 객체 모형 → 동적 모형"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 2,
            "question_type": "multiple_choice",
            "question_description": "XP(eXtreme Programming)의 5가지 가치로 거리가 먼 것은?",
            "additional_content": null,
            "choices": {
                "1": "용기",
                "2": "의사소통",
                "3": "정형 분석",
                "4": "피드백"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 3,
            "question_type": "multiple_choice",
            "question_description": "애자일 기법에 대한 설명으로 맞지 않은 것은?",
            "additional_content": null,
            "choices": {
                "1": "절차와 도구보다 개인과 소통을 중요하게 생각한다.",
                "2": "계획에 중점을 두어 변경 대응이 난해하다.",
                "3": "소프트웨어가 잘 실행되는데 가치를 둔다.",
                "4": "고객과의 피드백을 중요하게 생각한다."
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 4,
            "question_type": "multiple_choice",
            "question_description": "UML에서 활용되는 다이어그램 중, 시스템의 동작을 표현하는 행위(Behavioral) 다이어그램에 해당하지 않는 것은?",
            "additional_content": null,
            "choices": {
                "1": "유스케이스 다이어그램(Use Case Diagram)",
                "2": "시퀀스 다이어그램(Sequence Diagram)",
                "3": "활동 다이어그램(Activity Diagram)",
                "4": "배치 다이어그램(Deployment Diagram)"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 5,
            "question_type": "multiple_choice",
            "question_description": "디자인 패턴 사용의 장·단점에 대한 설명으로 거리가 먼 것은?",
            "additional_content": null,
            "choices": {
                "1": "소프트웨어 구조 파악이 용이하다.",
                "2": "객체지향 설계 및 구현의 생산성을 높이는데 적합하다.",
                "3": "재사용을 위한 개발 시간이 단축된다.",
                "4": "절차형 언어와 함께 이용될 때 효율이 극대화된다."
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 6,
            "question_type": "multiple_choice",
            "question_description": "클라이언트와 서버 간의 통신을 담당하는 시스템 소프트웨어를 무엇이라고 하는가?",
            "additional_content": null,
            "choices": {
                "1": "웨어러블",
                "2": "하이웨어",
                "3": "미들웨어",
                "4": "응용 소프트웨어"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 7,
            "question_type": "multiple_choice",
            "question_description": "CASE(Computer Aided Software Engineering)에 대한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "소프트웨어 모듈의 재사용성이 향상된다.",
                "2": "자동화된 기법을 통해 소프트웨어 품질이 향상된다.",
                "3": "소프트웨어 사용자들에게 사용 방법을 신속히 숙지시키기 위해 사용된다.",
                "4": "소프트웨어 유지보수를 간편하게 수행할 수 있다."
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 8,
            "question_type": "multiple_choice",
            "question_description": "다음은 어떤 프로그램 구조를 나타낸다. 모듈 F에서의 fan-in과 fan-out의 수는 얼마인가?",
            "additional_content": "**프로그램 구조도:**\n\nA → B, C, D\nB → E, F\nC → F\nD → F\nE → G\nF → G, H",
            "choices": {
                "1": "fan-in : 2, fan-out : 3",
                "2": "fan-in : 3, fan-out : 2",
                "3": "fan-in : 1, fan-out : 2",
                "4": "fan-in : 2, fan-out : 1"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 9,
            "question_type": "multiple_choice",
            "question_description": "요구사항 개발 프로세스의 순서로 옳은 것은?",
            "additional_content": "**프로세스 기호:**\n㉠ 도출(Elicitation)\n㉡ 명세(Specification)\n㉢ 분석(Analysis)\n㉣ 확인(Validation)",
            "choices": {
                "1": "㉠ → ㉡ → ㉢ → ㉣",
                "2": "㉠ → ㉢ → ㉡ → ㉣",
                "3": "㉠ → ㉣ → ㉢ → ㉡",
                "4": "㉠ → ㉢ → ㉣ → ㉡"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 10,
            "question_type": "multiple_choice",
            "question_description": "시스템의 구성 요소로 볼 수 없는 것은?",
            "additional_content": null,
            "choices": {
                "1": "Process",
                "2": "Feedback",
                "3": "Maintenance",
                "4": "Control"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 11,
            "question_type": "multiple_choice",
            "question_description": "UML 모델에서 한 사물의 명세가 바뀌면 다른 사물에 영향을 주며, 일반적으로 한 클래스가 다른 클래스를 오퍼레이션의 매개 변수로 사용하는 경우에 나타나는 관계는?",
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
            "question_number": 12,
            "question_type": "multiple_choice",
            "question_description": "순차 다이어그램(Sequence Diagram)과 관련한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "객체들의 상호 작용을 나타내기 위해 사용한다.",
                "2": "시간의 흐름에 따라 객체들이 주고 받는 메시지의 전달 과정을 강조한다.",
                "3": "동적 다이어그램보다는 정적 다이어그램에 가깝다.",
                "4": "교류 다이어그램(Interaction Diagram)의 한 종류로 볼 수 있다."
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 13,
            "question_type": "multiple_choice",
            "question_description": "User Interface 설계 시 오류 메시지나 경고에 관한 지침으로 가장 거리가 먼 것은?",
            "additional_content": null,
            "choices": {
                "1": "메시지는 이해하기 쉬워야 한다.",
                "2": "오류로부터 회복을 위한 구체적인 설명이 제공되어야 한다.",
                "3": "오류로 인해 발생될 수 있는 부정적인 내용을 적극적으로 사용자들에게 알려야 한다.",
                "4": "소리나 색의 사용을 줄이고 텍스트로만 전달하도록 한다."
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 14,
            "question_type": "multiple_choice",
            "question_description": "자료 흐름도(DFD)의 각 요소별 표기 형태의 연결이 옳지 않은 것은?",
            "additional_content": null,
            "choices": {
                "1": "Process: 원",
                "2": "Data Flow: 화살표",
                "3": "Data Store: 삼각형",
                "4": "Terminator: 사각형"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 15,
            "question_type": "multiple_choice",
            "question_description": "정보공학 방법론에서 데이터베이스 설계의 표현으로 사용하는 모델링 언어는?",
            "additional_content": null,
            "choices": {
                "1": "Package Diagram",
                "2": "State Transition Diagram",
                "3": "Deployment Diagram",
                "4": "Entity-Relationship Diagram"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 16,
            "question_type": "multiple_choice",
            "question_description": "GoF(Gang of Four) 디자인 패턴을 생성, 구조, 행동 패턴의 세 그룹으로 분류할 때, 구조 패턴이 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "Adapter 패턴",
                "2": "Bridge 패턴",
                "3": "Builder 패턴",
                "4": "Proxy 패턴"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 17,
            "question_type": "multiple_choice",
            "question_description": "모바일 기기에서 사용하는 NUI 인터페이스에 속하지 않는 것은 무엇인가?",
            "additional_content": null,
            "choices": {
                "1": "Pinch",
                "2": "Press",
                "3": "Flow",
                "4": "Flick"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 18,
            "question_type": "multiple_choice",
            "question_description": "소프트웨어 공학에서 워크스루(Walkthrough)에 대한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "사용사례를 확장하여 명세하거나 설계 다이어그램, 원시코드, 테스트 케이스 등에 적용할 수 있다.",
                "2": "복잡한 알고리즘 또는 반복, 실시간 동작, 병행 처리와 같은 기능이나 동작을 이해하려고 할 때 유용하다.",
                "3": "인스펙션(Inspection)과 동일한 의미를 가진다.",
                "4": "단순한 테스트 케이스를 이용하여 프로덕트를 수작업으로 수행해 보는 것이다."
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 19,
            "question_type": "multiple_choice",
            "question_description": "다음 내용이 설명하는 객체지향 설계 원칙은?",
            "additional_content": "**설명 내용:**\n• 클라이언트는 자신이 사용하지 않는 메소드와 의존관계를 맺으면 안 된다.\n• 클라이언트가 사용하지 않는 인터페이스 때문에 영향을 받아서는 안 된다.",
            "choices": {
                "1": "인터페이스 분리 원칙",
                "2": "단일 책임 원칙",
                "3": "개방 폐쇄의 원칙",
                "4": "리스코프 교체의 원칙"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 20,
            "question_type": "multiple_choice",
            "question_description": "HIPO(Hierarchy Input Process Output)에 대한 설명으로 거리가 먼 것은?",
            "additional_content": null,
            "choices": {
                "1": "상향식 소프트웨어 개발을 위한 문서화 도구이다.",
                "2": "HIPO 차트 종류에는 가시적 도표, 총체적 도표, 세부적 도표가 있다.",
                "3": "기능과 자료의 의존 관계를 동시에 표현할 수 있다.",
                "4": "보기 쉽고 이해하기 쉽다."
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 21,
            "question_type": "multiple_choice",
            "question_description": "반정규화(Denormalization) 유형 중 중복 테이블을 추가하는 방법에 해당하지 않는 것은?",
            "additional_content": null,
            "choices": {
                "1": "빌드 테이블의 추가",
                "2": "집계 테이블의 추가",
                "3": "진행 테이블의 추가",
                "4": "특정 부분만을 포함하는 테이블 추가"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 22,
            "question_type": "multiple_choice",
            "question_description": "알고리즘 시간 복잡도 O(1)이 의미하는 것은?",
            "additional_content": null,
            "choices": {
                "1": "컴퓨터 처리가 불가",
                "2": "알고리즘 입력 데이터 수가 한 개",
                "3": "알고리즘 수행시간이 입력 데이터 수와 관계없이 일정",
                "4": "알고리즘 길이가 입력 데이터보다 작음"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 23,
            "question_type": "multiple_choice",
            "question_description": "디지털 저작권 관리(DRM)의 기술 요소가 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "크랙 방지 기술",
                "2": "정책 관리 기술",
                "3": "암호화 기술",
                "4": "방화벽 기술"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 24,
            "question_type": "multiple_choice",
            "question_description": "다음 트리를 Preorder 운행법으로 운행할 경우 가장 먼저 탐색되는 것은?",
            "additional_content": "**트리 구조:**\nA\n├── B\n│   ├── D\n│   │   └── G\n│   └── E\n│       └── H\n└── C\n    └── F",
            "choices": {
                "1": "A",
                "2": "B",
                "3": "D",
                "4": "G"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 25,
            "question_type": "multiple_choice",
            "question_description": "인터페이스 보안을 위해 네트워크 영역에 적용될 수 있는 솔루션과 거리가 먼 것은?",
            "additional_content": null,
            "choices": {
                "1": "IPSec",
                "2": "SSL",
                "3": "SMTP",
                "4": "S-HTTP"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 26,
            "question_type": "multiple_choice",
            "question_description": "저작권 관리 구성 요소에 대한 설명이 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "콘텐츠 제공자(Contents Provider): 콘텐츠를 제공하는 저작권자",
                "2": "콘텐츠 분배자(Contents Distributor): 콘텐츠를 메타 데이터와 함께 배포 가능한 단위로 묶는 기능",
                "3": "클리어링 하우스(Clearing House): 키 관리 및 라이선스 발급 관리",
                "4": "DRM 컨트롤러: 배포된 콘텐츠의 이용 권한을 통제"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 27,
            "question_type": "multiple_choice",
            "question_description": "소프트웨어 패키징 도구 활용 시 고려사항으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "반드시 내부 콘텐츠에 대한 암호화 및 보안을 고려한다.",
                "2": "보안을 위하여 이기종 연동을 고려하지 않아도 된다.",
                "3": "사용자 편의성을 위한 복잡성 및 비효율성 문제를 고려한다.",
                "4": "제품 소프트웨어 종류에 적합한 암호화 알고리즘을 적용한다."
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 28,
            "question_type": "multiple_choice",
            "question_description": "자료 구조에 대한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "큐는 비선형 구조에 해당한다.",
                "2": "큐는 First In - First Out 처리를 수행한다.",
                "3": "스택은 Last In - First Out 처리를 수행한다.",
                "4": "스택은 서브루틴 호출, 인터럽트 처리, 수식 계산 및 수식 표기법에 응용된다."
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
            "question_description": "다음 중 단위 테스트를 통해 발견할 수 있는 오류가 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "알고리즘 오류에 따른 원치 않는 결과",
                "2": "탈출구가 없는 반복문의 사용",
                "3": "모듈 간의 비정상적 상호 작용으로 인한 원치 않는 결과",
                "4": "틀린 계산 수식에 의한 잘못된 결과"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 31,
            "question_type": "multiple_choice",
            "question_description": "다음 데이터를 버블 정렬로 오름차순 정렬할 때 Pass 2의 결과는?",
            "additional_content": "**데이터:** 9, 6, 7, 3, 5",
            "choices": {
                "1": "3, 5, 6, 7, 9",
                "2": "6, 7, 3, 5, 9",
                "3": "3, 5, 9, 6, 7",
                "4": "6, 3, 5, 7, 9"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 32,
            "question_type": "multiple_choice",
            "question_description": "다음 중 케이스 자동 생성 도구를 이용한 테스트 데이터 발견 방법이 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "Stub and Driver",
                "2": "Input domain analysis",
                "3": "Random test",
                "4": "Data flow diagram"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 33,
            "question_type": "multiple_choice",
            "question_description": "다음 중 형상 관리의 개념과 절차에 대한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "형상 식별은 형상 관리 계획에 따라 형상 관리 대상이 되는 것을 식별하는 과정이다.",
                "2": "형상 관리는 가시성과 추적성을 보장하여 소프트웨어 생산성과 품질을 향상시킨다.",
                "3": "형상 통제 과정에서 형상 항목에 대한 변경 요청은 즉시 수용하여 반영해야 한다.",
                "4": "형상 감사는 형상 관리가 형상 관리 계획에 따라 진행되고 있는지, 형상 항목의 변경이 요구사항에 따라 적절히 이루어졌는지 확인하는 활동이다."
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 34,
            "question_type": "multiple_choice",
            "question_description": "다음 중 위험 요소를 사전에 예측하고 준비하여 그 영향을 인식하고 분석하여 관리함으로써 프로젝트 성공을 보장하기 위한 모든 기법과 활동을 포함하는 것은?",
            "additional_content": null,
            "choices": {
                "1": "Critical Path Method",
                "2": "Risk Analysis",
                "3": "Work Breakdown Structure",
                "4": "Waterfall Model"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 35,
            "question_type": "multiple_choice",
            "question_description": "Divide and Conquer를 기반으로 하며 피벗을 사용하고 최악의 경우 n(n-1)/2번의 비교를 수행하는 정렬 알고리즘은?",
            "additional_content": null,
            "choices": {
                "1": "Selection Sort",
                "2": "Bubble Sort",
                "3": "Insert Sort",
                "4": "Quick Sort"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 36,
            "question_type": "multiple_choice",
            "question_description": "다음 중 Clean Code 작성 원칙으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "Abstraction: 하위 클래스/메소드/함수로 애플리케이션의 특성을 간략하게 표현하고, 상위 클래스/메소드/함수에서 세부 내용을 구현한다.",
                "2": "Dependency: 다른 모듈에 미치는 영향을 최소화하도록 코드를 작성한다.",
                "3": "Readability: 누구나 쉽게 읽을 수 있는 코드를 작성한다.",
                "4": "Redundancy: 중복을 최소화하도록 코드를 작성한다."
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 37,
            "question_type": "multiple_choice",
            "question_description": "순서가 있는 리스트의 한쪽 끝에서만 데이터 삽입(Push)과 삭제(Pop)가 일어나며, LIFO(Last In-First-Out)의 특성을 가지는 자료구조는?",
            "additional_content": null,
            "choices": {
                "1": "Tree",
                "2": "Graph",
                "3": "Stack",
                "4": "Queue"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 38,
            "question_type": "multiple_choice",
            "question_description": "다음 중 White Box Testing과 관련된 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "Logic-Flow Diagrams를 이용하여 White Box Testing을 이해할 수 있다.",
                "2": "실제 프로그램을 테스트 데이터로 실행하여 오류를 발견하는 동적 테스트에 해당한다.",
                "3": "테스트 케이스는 프로그램이나 모듈의 요구사항이나 명세에 따라 결정하며, 프로그램의 구조는 고려하지 않는다.",
                "4": "검증 기준(Test Coverage)을 정하여 테스트 데이터를 선택한다."
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 39,
            "question_type": "multiple_choice",
            "question_description": "다음 레코드 구조에서 14를 이진 탐색법으로 검색할 때 비교 횟수는?",
            "additional_content": "**레코드:** 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15",
            "choices": {
                "1": "1",
                "2": "2",
                "3": "3",
                "4": "4"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 40,
            "question_type": "multiple_choice",
            "question_description": "DBMS의 필수 기능 중 데이터베이스에 저장된 데이터 타입과 구조에 대한 정의, 사용법, 제약 조건을 명시하여 모든 응용 프로그램이 요구하는 데이터 구조를 지원하는 기능은?",
            "additional_content": null,
            "choices": {
                "1": "정의 기능",
                "2": "조작 기능",
                "3": "제어 기능",
                "4": "절차 기능"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 41,
            "question_type": "multiple_choice",
            "question_description": "다음 중 트랜잭션의 특성을 설명한 것은?",
            "additional_content": "\"트랜잭션의 연산은 모두 데이터베이스에 반영되거나 전혀 반영되지 않아야 한다.\"",
            "choices": {
                "1": "Durability",
                "2": "Share",
                "3": "Consistency",
                "4": "Atomicity"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 42,
            "question_type": "multiple_choice",
            "question_description": "다음 중 E-R 모델의 표현 방법으로 옳지 않은 것은?",
            "additional_content": null,
            "choices": {
                "1": "개체 타입: 사각형",
                "2": "관계 타입: 마름모",
                "3": "속성: 오각형",
                "4": "연결: 선"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 43,
            "question_type": "multiple_choice",
            "question_description": "STUDENT 테이블에 독어과 학생 50명, 중국어과 학생 30명, 영문과 학생 50명의 정보가 저장되어 있을 때, 다음 두 SQL문의 실행 결과 튜플 수는? (단, DEPT 컬럼은 학과명)",
            "additional_content": "**SQL문:**\n@ SELECT DEPT FROM STUDENT;\n@ SELECT DISTINCT DEPT FROM STUDENT;",
            "choices": {
                "1": "@ 3, @ 3",
                "2": "@ 50, @ 3",
                "3": "@ 130, @ 3",
                "4": "@ 130, @ 130"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 44,
            "question_type": "multiple_choice",
            "question_description": "다음 중 릴레이션에 대한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "릴레이션은 튜플의 삽입, 삭제 등의 연산으로 시간에 따라 변화한다.",
                "2": "릴레이션에 포함된 모든 튜플은 서로 다르다.",
                "3": "속성은 논리적으로 더 이상 분할할 수 없는 원자 값으로 저장된다.",
                "4": "릴레이션에 포함된 튜플들 사이에는 순서가 있다."
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 45,
            "question_type": "multiple_choice",
            "question_description": "다음이 나타내는 함수적 종속성의 추론 규칙은?",
            "additional_content": "X → Y and Y → Z then X → Z",
            "choices": {
                "1": "분해 규칙",
                "2": "이행 규칙",
                "3": "반사 규칙",
                "4": "결합 규칙"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 46,
            "question_type": "multiple_choice",
            "question_description": "다음 중 데이터베이스 설계 시 물리적 설계 단계에서 수행되지 않는 것은?",
            "additional_content": null,
            "choices": {
                "1": "저장 레코드 형식 설계",
                "2": "레코드 집중의 분석 및 설계",
                "3": "접근 경로 설계",
                "4": "목표 DBMS에 적합한 스키마 설계"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 47,
            "question_type": "multiple_choice",
            "question_description": "뷰(VIEW)에 대한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "뷰 위에 또 다른 뷰를 정의할 수 있다.",
                "2": "뷰에 대한 조작에서 삽입, 갱신, 삭제 연산은 제약이 따른다.",
                "3": "뷰의 정의는 기본 테이블과 같이 ALTER문을 이용하여 변경한다.",
                "4": "뷰가 정의된 기본 테이블이 제거되면 뷰도 자동적으로 제거된다."
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 48,
            "question_type": "multiple_choice",
            "question_description": "DBA가 사용자 PARK에게 테이블 [STUDENT]의 데이터를 갱신할 수 있는 시스템 권한을 부여하고자 하는 SQL문을 작성하고자 한다. 다음에 주어진 SQL문의 빈칸을 알맞게 채운 것은?",
            "additional_content": "**SQL문:** SQL>GRANT (A) (B) ON STUDENT TO PARK;",
            "choices": {
                "1": "(A) INSERT, (B) INTO",
                "2": "(A) ALTER, (B) TO",
                "3": "(A) UPDATE, (B) ON",
                "4": "(A) REPLACE, (B) IN"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 49,
            "question_type": "multiple_choice",
            "question_description": "정규화된 엔티티, 속성, 관계를 시스템의 성능 향상과 개발 운영의 단순화를 위해 중복, 통합, 분리 등을 수행하는 데이터 모델링 기법은?",
            "additional_content": null,
            "choices": {
                "1": "정규화",
                "2": "반정규화",
                "3": "집단화",
                "4": "머징"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 50,
            "question_type": "multiple_choice",
            "question_description": "3NF에서 BCNF가 되기 위한 조건은?",
            "additional_content": null,
            "choices": {
                "1": "이행적 함수 종속 제거",
                "2": "부분적 함수 종속 제거",
                "3": "다치 종속 제거",
                "4": "결정자이면서 후보키가 아닌 것 제거"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 51,
            "question_type": "multiple_choice",
            "question_description": "데이터베이스 성능에 많은 영향을 주는 DBMS의 구성 요소로 테이블과 클러스터에 연관되어 독립적인 저장 공간을 보유하며, 데이터베이스에 저장된 자료를 더욱 빠르게 조회하기 위하여 사용되는 것은?",
            "additional_content": null,
            "choices": {
                "1": "인덱스(Index)",
                "2": "트랜잭션(Transaction)",
                "3": "역정규화(Denormalization)",
                "4": "트리거(Trigger)"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 52,
            "question_type": "multiple_choice",
            "question_description": "다음 관계 대수 중 순수 관계 연산자가 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "차집합(Difference)",
                "2": "프로젝트(Project)",
                "3": "조인(Join)",
                "4": "디비전(Division)"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 53,
            "question_type": "multiple_choice",
            "question_description": "릴레이션에서 기본 키를 구성하는 속성은 널(Null) 값이나 중복 값을 가질 수 없다는 것을 의미하는 제약 조건은?",
            "additional_content": null,
            "choices": {
                "1": "참조 무결성",
                "2": "보안 무결성",
                "3": "개체 무결성",
                "4": "정보 무결성"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 54,
            "question_type": "multiple_choice",
            "question_description": "관계 대수에 대한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "원하는 릴레이션을 정의하는 방법을 제공하며 비절차적 언어이다.",
                "2": "릴레이션 조작을 위한 연산의 집합으로 피연산자와 결과가 모두 릴레이션이다.",
                "3": "일반 집합 연산과 순수 관계 연산으로 구분된다.",
                "4": "질의에 대한 해를 구하기 위해 수행해야 할 연산의 순서를 명시한다."
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 55,
            "question_type": "multiple_choice",
            "question_description": "학적 테이블에서 전화번호가 Null 값이 아닌 학생명을 모두 검색할 때, SQL 구문으로 옳은 것은?",
            "additional_content": null,
            "choices": {
                "1": "SELECT 학생명 FROM 학적 WHERE 전화번호 DON'T NULL;",
                "2": "SELECT 학생명 FROM 학적 WHERE 전화번호 !=NOT NULL;",
                "3": "SELECT 학생명 FROM 학적 WHERE 전화번호 IS NOT NULL;",
                "4": "SELECT 학생명 FROM 학적 WHERE 전화번호 <> NULL;"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 56,
            "question_type": "multiple_choice",
            "question_description": "분산 데이터베이스 시스템(Distributed Database System)에 대한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "분산 데이터베이스는 논리적으로는 하나의 시스템에 속하지만 물리적으로는 여러 개의 컴퓨터 사이트에 분산되어 있다.",
                "2": "위치 투명성, 중복 투명성, 병행 투명성, 장애 투명성을 목표로 한다.",
                "3": "데이터베이스의 설계가 비교적 어렵고, 개발 비용과 처리 비용이 증가한다는 단점이 있다.",
                "4": "분산 데이터베이스 시스템의 주요 구성 요소는 분산 처리기, P2P 시스템, 단일 데이터베이스 등이 있다."
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 57,
            "question_type": "multiple_choice",
            "question_description": "데이터 모델의 구성 요소 중 데이터 구조에 따라 개념 세계나 컴퓨터 세계에서 실제로 표현된 값들을 처리하는 작업을 의미하는 것은?",
            "additional_content": null,
            "choices": {
                "1": "Relation",
                "2": "Data Structure",
                "3": "Constraint",
                "4": "Operation"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 58,
            "question_type": "multiple_choice",
            "question_description": "데이터 사전에 대한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "시스템 카탈로그 또는 시스템 데이터베이스라고도 한다.",
                "2": "데이터 사전 역시 데이터베이스의 일종이므로 일반 사용자가 생성, 유지 및 수정할 수 있다.",
                "3": "데이터베이스에 대한 데이터인 메타데이터(Metadata)를 저장하고 있다.",
                "4": "데이터 사전에 있는 데이터에 실제로 접근하는 데 필요한 위치 정보는 데이터 디렉토리(Data Directory)라는 곳에서 관리한다."
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 59,
            "question_type": "multiple_choice",
            "question_description": "키는 개체 집합에서 고유하게 개체를 식별할 수 있는 속성이다. 데이터베이스에서 사용되는 키의 종류에 대한 설명으로 옳지 않은 것은?",
            "additional_content": null,
            "choices": {
                "1": "후보키는 개체들을 고유하게 식별할 수 있는 속성이다.",
                "2": "슈퍼키는 한 개 이상의 속성들의 집합으로 구성된 키이다.",
                "3": "외래키는 다른 테이블의 기본키로 사용되는 속성이다.",
                "4": "대체키는 슈퍼키 중에서 기본키를 제외한 나머지 키를 의미한다."
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 60,
            "question_type": "multiple_choice",
            "question_description": "데이터웨어하우스의 기본적인 OLAP(On-Line Analytical Processing) 연산이 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "Translate",
                "2": "Roll-Up",
                "3": "Dicing",
                "4": "Drill-Down"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 61,
            "question_type": "multiple_choice",
            "question_description": "UNIX의 쉘(Shell)에 관한 설명으로 옳지 않은 것은?",
            "additional_content": null,
            "choices": {
                "1": "명령어 해석기이다.",
                "2": "시스템과 사용자 간의 인터페이스를 담당한다.",
                "3": "여러 종류의 쉘이 있다.",
                "4": "프로세스, 기억장치, 입출력 관리를 수행한다."
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 62,
            "question_type": "multiple_choice",
            "question_description": "다음 내용이 설명하는 소프트웨어 취약점은?",
            "additional_content": "**설명:** 메모리를 다루는 데 오류가 발생하여 잘못된 동작을 하는 프로그램 취약점",
            "choices": {
                "1": "FTP 바운스 공격",
                "2": "SQL 삽입",
                "3": "버퍼 오버플로",
                "4": "디렉토리 접근 공격"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 63,
            "question_type": "multiple_choice",
            "question_description": "Java에서 사용되는 출력 함수가 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "System.out.print()",
                "2": "System.out.println()",
                "3": "System.out.printing()",
                "4": "System.out.printf()"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 64,
            "question_type": "multiple_choice",
            "question_description": "결합도가 낮은 것부터 높은 순으로 옳게 나열한 것은?",
            "additional_content": "**결합도 종류:**\n(ㄱ) 내용 결합도 (Content Coupling)\n(ㄴ) 자료 결합도 (Data Coupling)\n(ㄷ) 공통 결합도 (Common Coupling)\n(ㄹ) 스탬프 결합도 (Stamp Coupling)\n(ㅁ) 외부 결합도 (External Coupling)\n(ㅂ) 제어 결합도 (Control Coupling)",
            "choices": {
                "1": "(ㄱ) → (ㄴ) → (ㄹ) → (ㅂ) → (ㅁ) → (ㄷ)",
                "2": "(ㄴ) → (ㄹ) → (ㅁ) → (ㅂ) → (ㄷ) → (ㄱ)",
                "3": "(ㄴ) → (ㄹ) → (ㅂ) → (ㅁ) → (ㄷ) → (ㄱ)",
                "4": "(ㄱ) → (ㄴ) → (ㄹ) → (ㅁ) → (ㅂ) → (ㄷ)"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 65,
            "question_type": "multiple_choice",
            "question_description": "OSI 7계층 중 네트워크 계층에 대한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "패킷을 발신지로부터 최종 목적지까지 전달하는 책임을 진다.",
                "2": "한 노드로부터 다른 노드로 프레임을 전송하는 책임을 진다.",
                "3": "패킷에 발신지와 목적지의 논리 주소를 추가한다.",
                "4": "라우터 또는 교환기는 패킷 전달을 위해 경로를 지정하거나 교환 기능을 제공한다."
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 66,
            "question_type": "multiple_choice",
            "question_description": "다음 C 언어 프로그램이 실행되었을 때의 결과는?",
            "additional_content": "```c\n#include <stdio.h>\nint main(void) {\n    int a = 3, b = 4, c = 2;\n    int r1, r2, r3;\n\n    r1 = b <= 4 || c == 2;\n    r2 = (a > 0) && (b < 5);\n    r3 = !c;\n\n    printf(\"%d\", r1 + r2 + r3);\n    return 0;\n}\n```",
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
            "question_description": "TCP/IP 계층 구조에서 IP의 동작 과정에서의 전송 오류가 발생하는 경우에 대비해 오류 정보를 전송하는 목적으로 사용하는 프로토콜은?",
            "additional_content": null,
            "choices": {
                "1": "ECP(Error Checking Protocol)",
                "2": "ARP(Address Resolution Protocol)",
                "3": "ICMP(Internet Control Message Protocol)",
                "4": "PPP(Point-to-Point Protocol)"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 68,
            "question_type": "multiple_choice",
            "question_description": "UNIX 운영체제에 관한 특징으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "하나 이상의 작업에 대하여 백그라운드에서 수행이 가능하다.",
                "2": "Multi-User는 지원하지만 Multi-Tasking은 지원하지 않는다.",
                "3": "트리 구조의 파일 시스템을 갖는다.",
                "4": "이식성이 높으며 장치 간의 호환성이 높다."
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 69,
            "question_type": "multiple_choice",
            "question_description": "3개의 보관 구조를 가지는 주기억장치가 있으며, 다음의 순서로 페이지 참조가 발생할 때, FIFO 페이지 교체 알고리즘을 사용할 경우 마지막 페이지 값으로 옳은 것은?",
            "additional_content": "**페이지 참조 순서:** 1, 2, 3, 2, 4, 2, 3, 1, 3",
            "choices": {
                "1": "4, 2, 3",
                "2": "4, 1, 3",
                "3": "1, 2, 3",
                "4": "1, 4, 2"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 70,
            "question_type": "multiple_choice",
            "question_description": "TCP/IP 프로토콜에서 TCP가 해당하는 계층은?",
            "additional_content": null,
            "choices": {
                "1": "데이터 링크 계층",
                "2": "네트워크 계층",
                "3": "트랜스포트 계층",
                "4": "세션 계층"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 71,
            "question_type": "multiple_choice",
            "question_description": "OSI 7계층 모델에서 전송에 필요한 장치 간의 실제 접속과 절단 등 기계적, 전기적, 기능적, 절차적 특성을 정의한 계층은?",
            "additional_content": null,
            "choices": {
                "1": "물리 계층",
                "2": "데이터 링크 계층",
                "3": "네트워크 계층",
                "4": "전송 계층"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 72,
            "question_type": "multiple_choice",
            "question_description": "다음 JAVA 프로그램이 실행되었을 때의 결과는?",
            "additional_content": "```java\npublic class ovr {\n    public static void main(String[] args) {\n        int a = 1, b = 2, c = 3, d = 4;\n        int mx, mn;\n        mx = a < b ? b : a;\n        if (mx == 1) {\n            mn = a > mx ? b : a;\n        } else {\n            mn = b < mx ? d : c;\n        }\n        System.out.println(mn);\n    }\n}\n```",
            "choices": {
                "1": "1",
                "2": "2",
                "3": "3",
                "4": "4"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 73,
            "question_type": "multiple_choice",
            "question_description": "메모리 관리 기법 중 Worst Fit 방법을 사용할 경우 10K 크기의 프로그램 실행을 위해서는 어느 부분에 할당되는가?",
            "additional_content": "**메모리 할당 상태:**\n| 영역 번호 | 메모리 크기 | 사용 여부 |\n|-----------|-------------|-----------|\n| NO.1 | 8K | FREE |\n| NO.2 | 12K | FREE |\n| NO.3 | 10K | IN USE |\n| NO.4 | 20K | IN USE |\n| NO.5 | 16K | FREE |",
            "choices": {
                "1": "NO.2",
                "2": "NO.3",
                "3": "NO.4",
                "4": "NO.5"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 74,
            "question_type": "multiple_choice",
            "question_description": "응집도의 종류 중 서로 간에 어떠한 의미 있는 연관 관계도 지니지 않은 기능 요소로 구성되는 경우이며, 서로 다른 상위 모듈에 의해 호출되어 처리 상의 연관성이 없는 서로 다른 기능을 수행하는 경우의 응집도는?",
            "additional_content": null,
            "choices": {
                "1": "Functional Cohesion",
                "2": "Sequential Cohesion",
                "3": "Logical Cohesion",
                "4": "Coincidental Cohesion"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 75,
            "question_type": "multiple_choice",
            "question_description": "다음은 파이썬으로 만들어진 반복문 코드이다. 이 코드의 결과는?",
            "additional_content": "```python\n>> while(True):\n    print('A')\n    print('B')\n    print('C')\n    continue\n    print('D')\n```",
            "choices": {
                "1": "A, B, C 출력이 반복된다.",
                "2": "A, B, C",
                "3": "A, B, C, D 출력이 반복된다.",
                "4": "A, B, C, D 까지만 출력된다."
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 76,
            "question_type": "multiple_choice",
            "question_description": "C 언어에서 연산자 우선순위가 높은 것에서 낮은 것으로 바르게 나열된 것은?",
            "additional_content": null,
            "choices": {
                "1": "( ), !, ==, <, /",
                "2": "( ), !, <, ==, /",
                "3": "( ), !, /, <, ==",
                "4": "( ), /, !, <, =="
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 77,
            "question_type": "multiple_choice",
            "question_description": "모듈화(Modularity)와 관련한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "소프트웨어의 모듈은 프로그래밍 언어에서 Subroutine, Function 등으로 표현될 수 있다.",
                "2": "모듈의 수가 증가하면 상대적으로 각 모듈의 크기가 커지며, 모듈 사이의 상호교류가 감소하여 과부하(Overload) 현상이 나타난다.",
                "3": "모듈화는 시스템을 지능적으로 관리할 수 있도록 해주며, 복잡도 문제를 해결하는 데 도움을 준다.",
                "4": "모듈화는 시스템의 유지보수와 수정을 용이하게 한다."
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 78,
            "question_type": "multiple_choice",
            "question_description": "C 언어에서 정수 변수 a, b에 각각 1, 2가 저장되어 있을 때 다음 식의 연산 결과로 옳은 것은?",
            "additional_content": "**식:** a < b + 2 && a << 1 <= b",
            "choices": {
                "1": "0",
                "2": "1",
                "3": "3",
                "4": "5"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 79,
            "question_type": "multiple_choice",
            "question_description": "a[0]의 주소 값이 10일 경우 다음 C 언어 프로그램이 실행되었을 때의 결과는? (단, Int 형의 크기는 4Byte로 가정한다.)",
            "additional_content": "```c\n#include <stdio.h>\nint main(int argc, char* argv[]) {\n    int a[] = { 14,22,30,38};\n    printf(\"%u, \", &a[2]);\n    printf(\"%u\", a);\n    return 0;\n}\n```",
            "choices": {
                "1": "14, 10",
                "2": "14, M",
                "3": "18, 10",
                "4": "18, M"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 80,
            "question_type": "multiple_choice",
            "question_description": "C 언어 라이브러리 중 stdlib.h에 대한 설명으로 옳은 것은?",
            "additional_content": null,
            "choices": {
                "1": "문자열을 수치 데이터로 바꾸는 문자 변환함수와 수치를 문자열로 바꿔주는 변환함수 등이 있다.",
                "2": "문자열 처리 함수로 strlen()이 포함되어 있다.",
                "3": "표준 입출력 라이브러리이다.",
                "4": "삼각 함수, 제곱근, 지수 등 수학적인 함수를 내장하고 있다."
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 81,
            "question_type": "multiple_choice",
            "question_description": "TCP/IP 기반 네트워크에서 동작하는 발행-구독 기반의 메시징 프로토콜로 최근 IoT 환경에서 자주 사용되고 있는 프로토콜은?",
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
            "question_number": 82,
            "question_type": "multiple_choice",
            "question_description": "COCOMO Model 중 기관 내부에서 개발된 중·소규모의 소프트웨어로 일괄 자료 처리나 과학기술 계산용, 비즈니스 자료 처리용으로 5만 라인 이하의 소프트웨어를 개발하는 유형은?",
            "additional_content": null,
            "choices": {
                "1": "Embeded",
                "2": "Organic",
                "3": "Semi-Detached",
                "4": "Semi-Embeded"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 83,
            "question_type": "multiple_choice",
            "question_description": "IP 또는 ICMP의 특성을 악용하여 특정 사이트에 집중적으로 데이터를 보내 네트워크 또는 시스템의 상태를 불능으로 만드는 공격 방법은?",
            "additional_content": null,
            "choices": {
                "1": "TearDrop",
                "2": "Smishing",
                "3": "Qshing",
                "4": "Smurfing"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 84,
            "question_type": "multiple_choice",
            "question_description": "기능 점수(Functional Point) 모형에서 비용 산정에 이용되는 요소가 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "클래스 인터페이스",
                "2": "명령어(사용자 질의수)",
                "3": "데이터 파일",
                "4": "출력 보고서"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 85,
            "question_type": "multiple_choice",
            "question_description": "다음 내용이 설명하는 스토리지 시스템은?",
            "additional_content": "**설명:**\n• 하드디스크와 같은 데이터 저장장치를 호스트버스 어댑터에 직접 연결하는 방식\n• 저장장치와 호스트 기기 사이에 네트워크 디바이스가 있지 말아야 하고 직접 연결하는 방식으로 구성",
            "choices": {
                "1": "DAS",
                "2": "NAS",
                "3": "N-SCREEN",
                "4": "NFC"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 86,
            "question_type": "multiple_choice",
            "question_description": "다음 암호 알고리즘 중 성격이 다른 하나는?",
            "additional_content": null,
            "choices": {
                "1": "MD4",
                "2": "MD5",
                "3": "SHA-1",
                "4": "AES"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 87,
            "question_type": "multiple_choice",
            "question_description": "다음 내용이 설명하는 접근 제어 모델은?",
            "additional_content": "**설명:**\n• 군대의 보안 레벨처럼 정보의 기밀성에 따라 상하 관계가 구분된 정보를 보호하기 위해 사용\n• 자신의 권한보다 낮은 보안 레벨 권한을 가진 경우에는 높은 보안 레벨의 문서를 읽을 수 없고 자신의 권한보다 낮은 수준의 문서만 읽을 수 있다.\n• 자신의 권한보다 높은 보안 레벨의 문서에는 쓰기가 가능하지만 보안 레벨이 낮은 문서의 쓰기 권한은 제한한다.",
            "choices": {
                "1": "Clark-Wilson Integrity Model",
                "2": "PDCA Model",
                "3": "Bell-Lapadula Model",
                "4": "Chinese Wall Model"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 88,
            "question_type": "multiple_choice",
            "question_description": "SQL Injection 공격과 관련한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "SQL Injection은 임의로 작성한 SQL 구문을 애플리케이션에 삽입하는 공격 방식이다.",
                "2": "SQL Injection 취약점이 발생하는 곳은 주로 웹 애플리케이션과 데이터베이스가 연동되는 부분이다.",
                "3": "DBMS의 종류와 관계없이 SQL Injection 공격 기법은 모두 동일하다.",
                "4": "로그인과 같이 웹에서 사용자의 입력 값을 받아 데이터베이스 SQL문으로 데이터를 요청하는 경우 SQL Injection을 수행할 수 있다."
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 89,
            "question_type": "multiple_choice",
            "question_description": "다음 설명에 해당하는 시스템은?",
            "additional_content": "**설명:**\n• 1990년대 David Clock이 처음 제안하였다.\n• 비정상적인 접근의 탐지를 위해 의도적으로 설치해 둔 시스템이다.\n• 침입자를 속여 실제 공격당하는 것처럼 보여줌으로써 크래커를 추적 및 공격 기법의 정보를 수집하는 역할을 한다.\n• 쉽게 공격자에게 노출되어야 하며 쉽게 공격이 가능한 것처럼 취약해 보여야 한다.",
            "choices": {
                "1": "Apache",
                "2": "Hadoop",
                "3": "Honeypot",
                "4": "MapReduce"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 90,
            "question_type": "multiple_choice",
            "question_description": "다음 설명에 해당하는 공격 기법은?",
            "additional_content": "**설명:** 시스템 공격 기법 중 하나로 허용 범위 이상의 ICMP 패킷을 전송하여 대상 시스템의 네트워크를 마비시킨다.",
            "choices": {
                "1": "Ping of Death",
                "2": "Session Hijacking",
                "3": "Piggyback Attack",
                "4": "XSS"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 91,
            "question_type": "multiple_choice",
            "question_description": "네트워크 장비에 대한 설명으로 옳지 않은 것은?",
            "additional_content": null,
            "choices": {
                "1": "브라우저는 전송되는 신호가 전송 선로의 특성 및 외부 충격 등의 요인으로 인해 원래의 형태와 다르게 왜곡되거나 약해질 경우 원래의 신호 형태로 재생하여 다시 전송하는 역할을 수행한다.",
                "2": "브리지는 LAN과 LAN을 연결하거나 LAN 안에서의 컴퓨터 그룹을 연결하는 기능을 수행하며, 데이터 링크 계층 중 MAC 계층에서 사용된다.",
                "3": "스위치는 LAN과 LAN을 연결하여 훨씬 더 큰 LAN을 만드는 장치로, OSI 7계층의 2계층에서 사용된다.",
                "4": "라우터는 LAN과 LAN의 연결 기능에 데이터 전송의 최적 경로를 선택할 수 있는 기능이 추가된 것으로, 서로 다른 LAN이나 LAN과 WAN의 연결도 수행하고, OSI 7계층의 네트워크 계층에서 동작한다."
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 92,
            "question_type": "multiple_choice",
            "question_description": "다음 내용이 설명하는 것은?",
            "additional_content": "**설명:** 개인과 기업, 국가적으로 큰 위협이 되고 있는 주요 사이버 범죄 중 하나로, Snake, Darkside 등 시스템을 잠그거나 데이터를 암호화해 사용할 수 없도록 하고 이를 인질로 금전을 요구하는 데 사용되는 악성 프로그램이다.",
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
            "question_description": "소인수분해 문제를 이용한 공개키 암호화 기법에 널리 사용되는 암호 알고리즘 기법은?",
            "additional_content": null,
            "choices": {
                "1": "RSA",
                "2": "ECC",
                "3": "PKI",
                "4": "PRM"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 94,
            "question_type": "multiple_choice",
            "question_description": "메모리 상에서 프로그램의 복귀 주소와 변수 사이에 특정 값을 저장해 두었다가 그 값이 변경되었을 경우 오버플로우 상태로 가정하여 프로그램 실행을 중단하는 기술은?",
            "additional_content": null,
            "choices": {
                "1": "모드체크",
                "2": "리커버리 통제",
                "3": "시스로그",
                "4": "스택가드"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 95,
            "question_type": "multiple_choice",
            "question_description": "소프트웨어 개발 모델 중 나선형 모델의 4가지 주요 활동이 순서대로 나열된 것은?",
            "additional_content": "**활동:**\nⒶ 계획 수립 (Planning)\nⒷ 고객 평가 (Customer Evaluation)\nⒸ 개발 및 검증 (Development and Validation)\nⒹ 위험 분석 (Risk Analysis)",
            "choices": {
                "1": "Ⓐ-Ⓓ-Ⓒ-Ⓑ 순으로 반복",
                "2": "Ⓐ-Ⓑ-Ⓒ-Ⓓ 순으로 반복",
                "3": "Ⓐ-Ⓑ-Ⓓ-Ⓒ 순으로 반복",
                "4": "Ⓐ-Ⓒ-Ⓑ-Ⓓ 순으로 반복"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 96,
            "question_type": "multiple_choice",
            "question_description": "소프트웨어 정의 데이터센터(SDDC: Software Defined Data Center)에 대한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "컴퓨팅, 네트워킹, 스토리지, 관리 등을 모두 소프트웨어로 정의한다.",
                "2": "인력 개입 없이 소프트웨어 조작만으로 자동 제어 관리한다.",
                "3": "데이터센터 내 모든 자원을 가상화하여 서비스한다.",
                "4": "특정 하드웨어에 종속되어 특화된 업무를 서비스하기에 적합하다."
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 97,
            "question_type": "multiple_choice",
            "question_description": "스트림 암호화 방식의 설명으로 옳지 않은 것은?",
            "additional_content": null,
            "choices": {
                "1": "비트/바이트/단어들을 순차적으로 암호화한다.",
                "2": "해쉬 함수를 이용한 해쉬 암호화 방식을 사용한다.",
                "3": "RC4는 스트림 암호화 방식에 해당한다.",
                "4": "대칭키 암호화 방식이다."
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 98,
            "question_type": "multiple_choice",
            "question_description": "하둡(Hadoop)과 관계형 데이터베이스 간에 데이터를 전송할 수 있도록 설계된 도구는?",
            "additional_content": null,
            "choices": {
                "1": "Apnic",
                "2": "Topology",
                "3": "Sqoop",
                "4": "SDB"
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
                "1": "Effort Per Task기법",
                "2": "전문가 감정 기법",
                "3": "델파이기법",
                "4": "LOC기법"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 100,
            "question_type": "multiple_choice",
            "question_description": "소프트웨어 개발 방법론의 테일러링(Tailoring)과 관련한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "프로젝트 수행 시 예상되는 변화를 배제하고 신속히 진행하여야 한다.",
                "2": "프로젝트에 최적화된 개발 방법론을 적용하기 위해 절차, 산출물 등을 적절히 변경하는 활동이다.",
                "3": "관리 측면에서의 목적 중 하나는 최단기간에 안정적인 프로젝트 진행을 위한 사전 위험을 식별하고 제거하는 것이다.",
                "4": "기술적 측면에서의 목적 중 하나는 프로젝트에 최적화된 기술 요소를 도입하여 프로젝트 특성에 맞는 최적의 기법과 도구를 사용하는 것이다."
            },
            "score": 1
        }
    ]
} 
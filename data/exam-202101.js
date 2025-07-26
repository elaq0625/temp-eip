const EXAM_DATA_202101 = {
    "year": "2021",
    "round": 1,
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
            "question_description": "분산 컴퓨팅 환경에서 서로 다른 기종 간의 하드웨어나 프로토콜, 통신환경 등을 연결하여 응용 프로그램과 운영환경 간에 원만한 통신이 이루어질 수 있게 서비스를 제공하는 소프트웨어는?",
            "additional_content": null,
            "choices": {
                "1": "미들웨어",
                "2": "하드웨어",
                "3": "오픈허브웨어",
                "4": "그레이웨어"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 2,
            "question_type": "multiple_choice",
            "question_description": "기본 유스케이스 수행 시 특별한 조건을 만족할 때 수행하는 유스케이스는?",
            "additional_content": null,
            "choices": {
                "1": "연관",
                "2": "확장",
                "3": "선택",
                "4": "특화"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 3,
            "question_type": "multiple_choice",
            "question_description": "UML(Unified Modeling Language)에 대한 설명 중 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "기능적 모델은 사용자 측면에서 본 시스템 기능이며, UML에서는 Use case Diagram을 사용한다.",
                "2": "정적 모델은 객체, 속성, 연관관계, 오퍼레이션의 시스템의 구조를 나타내며, UML에서는 Class Diagram을 사용한다.",
                "3": "동적 모델은 시스템의 내부 동작을 말하며, UML에서는 Sequence Diagram, State Diagram, Activity Diagram을 사용한다.",
                "4": "State Diagram은 객체들 사이의 메시지 교환을 나타내며, Sequence Diagram은 하나의 객체가 가진 상태와 그 상태의 변화에 의한 동작순서를 나타낸다."
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 4,
            "question_type": "multiple_choice",
            "question_description": "운영체제 분석을 위해 리눅스에서 버전을 확인하고자 할 때 사용되는 명령어는?",
            "additional_content": null,
            "choices": {
                "1": "ls",
                "2": "cat",
                "3": "pwd",
                "4": "uname"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 5,
            "question_type": "multiple_choice",
            "question_description": "럼바우(Rumbaugh) 분석기법에서 정보 모델링이라고도 하며, 시스템에서 요구되는 객체를 찾아내어 속성과 연산 식별 및 객체들 간의 관계를 규정하여 다이어그램을 표시하는 모델링은?",
            "additional_content": null,
            "choices": {
                "1": "Object",
                "2": "Dynamic",
                "3": "Function",
                "4": "Static"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 6,
            "question_type": "multiple_choice",
            "question_description": "GoF(Gangs of Four) 디자인 패턴의 생성패턴에 속하지 않는 것은?",
            "additional_content": null,
            "choices": {
                "1": "추상 팩토리",
                "2": "빌더",
                "3": "어댑터",
                "4": "싱글턴"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 7,
            "question_type": "multiple_choice",
            "question_description": "현행 시스템 분석에서 고려하지 않아도 되는 항목은?",
            "additional_content": null,
            "choices": {
                "1": "DBMS 분석",
                "2": "네트워크 분석",
                "3": "운영체제 분석",
                "4": "인적 자원 분석"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 8,
            "question_type": "multiple_choice",
            "question_description": "UML 다이어그램 중 시스템 내 클래스의 정적 구조를 표현하고 클래스와 클래스, 클래스의 속성 사이의 관계를 나타내는 것은?",
            "additional_content": null,
            "choices": {
                "1": "Activity Diagram",
                "2": "Model Diagram",
                "3": "State Diagram",
                "4": "Class Diagram"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 9,
            "question_type": "multiple_choice",
            "question_description": "객체지향 분석 방법론 중 Coad-Yourdon 방법에 해당하는 것은?",
            "additional_content": null,
            "choices": {
                "1": "E-R 다이어그램을 사용하여 객체의 행위를 데이터 모델링하는데 초점을 둔 방법이다.",
                "2": "객체, 동적, 기능 모델로 나누어 수행하는 방법이다.",
                "3": "미시적 개발 프로세스와 거시적 개발 프로세스를 모두 사용하는 방법이다.",
                "4": "Use-Case를 강조하여 사용하는 방법이다."
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 10,
            "question_type": "multiple_choice",
            "question_description": "객체지향 개념에서 연관된 데이터와 함수를 함께 묶어 외부와 경계를 만들고 필요한 인터페이스만을 밖으로 드러내는 과정은?",
            "additional_content": null,
            "choices": {
                "1": "메시지",
                "2": "캡슐화",
                "3": "다형성",
                "4": "상속"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 11,
            "question_type": "multiple_choice",
            "question_description": "디자인 패턴을 이용한 소프트웨어 재사용으로 얻어지는 장점이 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "소프트웨어 코드의 품질을 향상시킬 수 있다.",
                "2": "개발 프로세스를 무시할 수 있다.",
                "3": "개발자들 사이의 의사소통을 원활하게 할 수 있다.",
                "4": "소프트웨어의 품질과 생산성을 향상시킬 수 있다."
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 12,
            "question_type": "multiple_choice",
            "question_description": "다음은 어떤 프로그램 구조를 나타낸다. 모듈 F에서의 fan-in과 fan-out의 수는 얼마인가?",
            "additional_content": "**프로그램 구조:**\n\n```\n    A\n   /|\\\n  B C D\n / \\\nE   F\n \\ / \\\n  F   G H\n```\n\n- A는 B, C, D를 호출\n- B는 E, F를 호출\n- C는 F를 호출\n- F는 G, H를 호출\n\n**Fan-in**: F를 호출하는 모듈 수 (B, C = 2개)\n**Fan-out**: F가 호출하는 모듈 수 (G, H = 2개)",
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
            "question_number": 13,
            "question_type": "multiple_choice",
            "question_description": "소프트웨어를 개발하기 위한 비즈니스(업무)를 객체와 속성, 클래스와 멤버, 전체와 부분 등으로 나누어서 분석해 내는 기법은?",
            "additional_content": null,
            "choices": {
                "1": "객체지향 분석",
                "2": "구조적 분석",
                "3": "기능적 분석",
                "4": "실시간 분석"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 14,
            "question_type": "multiple_choice",
            "question_description": "요구사항 모델링에서 사용되지 않는 것은?",
            "additional_content": null,
            "choices": {
                "1": "Agile method",
                "2": "Use Case Diagram",
                "3": "Sequence Diagram",
                "4": "Phase Diagram"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 15,
            "question_type": "multiple_choice",
            "question_description": "애자일 소프트웨어 개발 방법론의 가치가 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "프로세스와 도구보다 개인과 상호작용을 가치 있게 여긴다.",
                "2": "계약 협상보다 고객과의 협력을 가치 있게 여긴다.",
                "3": "작동하는 소프트웨어보다 포괄적인 문서를 가치 있게 여긴다.",
                "4": "계획을 따르기보다 변화에 대응하는 것을 가치 있게 여긴다."
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 16,
            "question_type": "multiple_choice",
            "question_description": "응용 프로그램이 원격 프로시저를 마치 로컬 프로시저인 것처럼 호출할 수 있게 해주는 미들웨어는?",
            "additional_content": null,
            "choices": {
                "1": "WAS",
                "2": "MOM",
                "3": "RPC",
                "4": "ORB"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 17,
            "question_type": "multiple_choice",
            "question_description": "바람직한 소프트웨어 설계 지침이 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "모듈의 기능은 예측 가능하도록 정의한다.",
                "2": "이식성을 고려한다.",
                "3": "모듈의 크기를 적절하게 유지한다.",
                "4": "독립적인 모듈을 만들면서 결합도를 최대화한다."
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 18,
            "question_type": "multiple_choice",
            "question_description": "내부/외부 송수신 연동 기술로 통신 프로그램을 생성하고 포트를 할당하며 요청 시 클라이언트와 연결하는 기술은?",
            "additional_content": null,
            "choices": {
                "1": "DB Link",
                "2": "Socket",
                "3": "Scrum",
                "4": "Prototype"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 19,
            "question_type": "multiple_choice",
            "question_description": "최상위 수준의 주요 사용자 기능에서 시작하여 기능을 하위 수준의 기능으로 분할하는 설계 방법은?",
            "additional_content": null,
            "choices": {
                "1": "객체지향 설계",
                "2": "데이터 흐름 설계",
                "3": "하향식 설계",
                "4": "상향식 설계"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 20,
            "question_type": "multiple_choice",
            "question_description": "CASE(Computer Aided Software Engineering)에 대한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "소프트웨어 모듈의 재사용성을 향상시킨다.",
                "2": "자동화를 통해 소프트웨어 품질을 향상시킨다.",
                "3": "사용자가 사용법에 쉽게 익숙해질 수 있다.",
                "4": "소프트웨어 유지보수가 용이하다."
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 21,
            "question_type": "multiple_choice",
            "question_description": "구현 단계의 작업 절차를 올바르게 나열한 것은?",
            "additional_content": "**작업 절차:**\n\nㄱ. 코딩\nㄴ. 코딩 작업 계획\nㄷ. 코드 테스트\nㄹ. 컴파일",
            "choices": {
                "1": "ㄴ → ㄱ → ㄹ → ㄷ",
                "2": "ㄱ → ㄴ → ㄷ → ㄹ",
                "3": "ㄴ → ㄱ → ㄷ → ㄹ",
                "4": "ㄱ → ㄹ → ㄴ → ㄷ"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 22,
            "question_type": "multiple_choice",
            "question_description": "소프트웨어 설치 매뉴얼에 포함되지 않는 항목은?",
            "additional_content": null,
            "choices": {
                "1": "소프트웨어 제품 개요",
                "2": "설치 관련 파일",
                "3": "프로그램 제거",
                "4": "소프트웨어 개발 기간"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 23,
            "question_type": "multiple_choice",
            "question_description": "주어진 전위 표기식을 후위 표기식으로 올바르게 표현한 것은?",
            "additional_content": "**전위 표기식:** `- / A + B C D E`",
            "choices": {
                "1": "A B C + / D E -",
                "2": "A B + C / D E -",
                "3": "A B C + D / E -",
                "4": "A B C + / D - E"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 24,
            "question_type": "multiple_choice",
            "question_description": "소프트웨어 품질 목표 중 쉽게 학습하고 사용할 수 있는 정도를 나타내는 것은?",
            "additional_content": null,
            "choices": {
                "1": "정확성",
                "2": "신뢰성",
                "3": "사용성",
                "4": "무결성"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 25,
            "question_type": "multiple_choice",
            "question_description": "사용자 인터페이스(UI) 요소 중 여러 선택사항에서 하나만 선택할 수 있을 때 사용하는 것은?",
            "additional_content": null,
            "choices": {
                "1": "Toggle button",
                "2": "Text box",
                "3": "Radio button",
                "4": "Check box"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 26,
            "question_type": "multiple_choice",
            "question_description": "Quick Sort에 대한 설명으로 옳은 것은?",
            "additional_content": null,
            "choices": {
                "1": "버킷을 사용하여 정렬하는 방법이다.",
                "2": "인접한 두 원소를 비교하여 교환하는 방법이다.",
                "3": "피벗을 기준으로 분할하여 정렬하는 방법이다.",
                "4": "간격을 두고 삽입 정렬을 수행하는 방법이다."
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 27,
            "question_type": "multiple_choice",
            "question_description": "디지털 저작권 관리(DRM)에서 사용되는 기술 요소가 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "키 관리",
                "2": "방화벽",
                "3": "암호화",
                "4": "크랙 방지"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 28,
            "question_type": "multiple_choice",
            "question_description": "스택(Stack)에 대한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "입출력이 한쪽 끝으로 제한된다.",
                "2": "Head와 Tail 포인터를 가진다.",
                "3": "LIFO 구조이다.",
                "4": "Underflow가 발생할 수 있다."
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 29,
            "question_type": "multiple_choice",
            "question_description": "현장 테스트라고도 하며, 개발자가 없이 고객 환경에 소프트웨어를 설치하여 테스트를 수행하는 인수 테스트 기법은?",
            "additional_content": null,
            "choices": {
                "1": "Beta testing",
                "2": "Alpha testing",
                "3": "Configuration testing",
                "4": "Recovery testing"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 30,
            "question_type": "multiple_choice",
            "question_description": "소프트웨어 형상 관리에 대한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "변경사항을 식별하고 제어한다.",
                "2": "전체 개발 비용을 절감하고 방해 요소를 최소화한다.",
                "3": "팀을 '수석 프로그래머 팀'이라고 한다.",
                "4": "버전 관리가 기능에 포함된다."
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 31,
            "question_type": "multiple_choice",
            "question_description": "노드와 가지로 구성되며 정점들 사이에 사이클이 형성되지 않고 계층적으로 관계가 나타나는 비선형 구조는?",
            "additional_content": null,
            "choices": {
                "1": "트리",
                "2": "네트워크",
                "3": "스택",
                "4": "분산"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 32,
            "question_type": "multiple_choice",
            "question_description": "이진 검색 알고리즘에 대한 설명 중 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "탐색 효율이 좋고 탐색 시간이 적게 소요된다.",
                "2": "검색할 데이터가 정렬되어 있어야 한다.",
                "3": "피보나치 수열에 따라 다음에 비교할 대상을 선정하여 검색한다.",
                "4": "비교횟수를 거듭할 때마다 검색 대상이 되는 데이터의 수가 절반으로 줄어든다."
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 33,
            "question_type": "multiple_choice",
            "question_description": "소프트웨어의 일부분을 다른 시스템에서 사용할 수 있는 정도를 의미하는 것은?",
            "additional_content": null,
            "choices": {
                "1": "신뢰성",
                "2": "유지보수성",
                "3": "가시성",
                "4": "재사용성"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 34,
            "question_type": "multiple_choice",
            "question_description": "하향식 통합시험을 위해 일시적으로 필요한 조건만을 가지고 임시로 제공되는 시험용 모듈은?",
            "additional_content": null,
            "choices": {
                "1": "Stub",
                "2": "Driver",
                "3": "Procedure",
                "4": "Function"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 35,
            "question_type": "multiple_choice",
            "question_description": "해싱 함수(Hashing Function)의 종류가 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "제곱법",
                "2": "숫자분석법",
                "3": "개방주소법",
                "4": "제산법"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 36,
            "question_type": "multiple_choice",
            "question_description": "블랙박스 검사 기법은?",
            "additional_content": null,
            "choices": {
                "1": "경계값 분석",
                "2": "조건 검사",
                "3": "기초 경로 검사",
                "4": "루프 검사"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 37,
            "question_type": "multiple_choice",
            "question_description": "주어진 트리를 Preorder 운행법으로 운행할 경우 다섯 번째로 탐색되는 노드는?",
            "additional_content": "**이진 트리 구조:**\n\n```\n    A\n   / \\\n  B   C\n / \\  /\nD   E F\n \\\n  G\n \\\n  H\n```\n\n**Preorder 순회**: A → B → D → G → H → E → C → F",
            "choices": {
                "1": "C",
                "2": "E",
                "3": "G",
                "4": "H"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 38,
            "question_type": "multiple_choice",
            "question_description": "주어진 자료에 대하여 \"Selection Sort\"를 사용하여 오름차순으로 정렬한 경우 PASS 3의 결과는?",
            "additional_content": "**초기 상태:** `8, 3, 4, 9, 7`\n\n**Selection Sort 과정:**\n- PASS 1: 최솟값 3을 맨 앞으로 → `3, 8, 4, 9, 7`\n- PASS 2: 다음 최솟값 4를 두 번째로 → `3, 4, 8, 9, 7`\n- PASS 3: 다음 최솟값 7을 세 번째로 → `3, 4, 7, 9, 8`",
            "choices": {
                "1": "3, 4, 7, 9, 8",
                "2": "3, 4, 8, 9, 7",
                "3": "3, 8, 4, 9, 7",
                "4": "3, 4, 7, 8, 9"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 39,
            "question_type": "multiple_choice",
            "question_description": "자료구조에 대한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "큐는 비선형구조에 해당한다.",
                "2": "큐는 First In - First Out 처리를 수행한다.",
                "3": "스택은 Last In - First out 처리를 수행한다.",
                "4": "스택은 서브루틴 호출, 인터럽트 처리, 수식 계산 및 수식 표기법에 응용된다."
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 40,
            "question_type": "multiple_choice",
            "question_description": "테스트 케이스에 일반적으로 포함되는 항목이 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "테스트 조건",
                "2": "테스트 데이터",
                "3": "테스트 비용",
                "4": "예상 결과"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 41,
            "question_type": "multiple_choice",
            "question_description": "주어진 릴레이션의 카디널리티와 차수가 옳게 나타낸 것은?",
            "additional_content": "**릴레이션 테이블:**\n\n| 아이디 | 성명 | 나이 | 등급 | 적립금 | 가입년도 |\n|--------|------|------|------|--------|----------|\n| yuyu01 | 원유철 | 36 | 3 | 2000 | 2008 |\n| sykim10 | 김성일 | 29 | 2 | 3300 | 2014 |\n| kshan4 | 한경선 | 45 | 3 | 2800 | 2009 |\n| namsu52 | 이남수 | 33 | 5 | 1000 | 2016 |\n\n**카디널리티**: 튜플(행)의 수 = 4\n**차수**: 애트리뷰트(열)의 수 = 6",
            "choices": {
                "1": "카디널리티 : 4, 차수 : 4",
                "2": "카디널리티 : 4, 차수 : 6",
                "3": "카디널리티 : 6, 차수 : 4",
                "4": "카디널리티 : 6, 차수 : 6"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 42,
            "question_type": "multiple_choice",
            "question_description": "데이터베이스 성능에 많은 영향을 주는 DBMS의 구성 요소로 테이블과 클러스터에 연관되어 독립적인 저장 공간을 보유하며, 데이터베이스에 저장된 자료를 더욱 빠르게 조회하기 위하여 사용되는 것은?",
            "additional_content": null,
            "choices": {
                "1": "인덱스",
                "2": "트랜잭션",
                "3": "역정규화",
                "4": "트리거"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 43,
            "question_type": "multiple_choice",
            "question_description": "데이터베이스 설계 단계 중 저장 레코드 양식설계, 레코드 집중의 분석 및 설계, 접근 경로 설계와 관계되는 것은?",
            "additional_content": null,
            "choices": {
                "1": "논리적 설계",
                "2": "요구 조건 분석",
                "3": "개념적 설계",
                "4": "물리적 설계"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 44,
            "question_type": "multiple_choice",
            "question_description": "시스템 카탈로그에 대한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "시스템 카탈로그의 갱신은 무결성 유지를 위하여 SQL을 이용하여 사용자가 직접 갱신하여야 한다.",
                "2": "데이터베이스에 포함되는 데이터 객체에 대한 정의나 명세에 대한 정보를 유지관리한다.",
                "3": "DBMS가 스스로 생성하고 유지하는 데이터베이스 내의 특별한 테이블의 집합체이다.",
                "4": "카탈로그에 저장된 정보를 메타 데이터라고도 한다."
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 45,
            "question_type": "multiple_choice",
            "question_description": "정규화를 거치지 않아 발생하게 되는 이상(anomaly) 현상의 종류에 대한 설명으로 옳지 않은 것은?",
            "additional_content": null,
            "choices": {
                "1": "삭제 이상이란 릴레이션에서 한 튜플을 삭제할 때 의도와는 상관없는 값들로 함께 삭제되는 연쇄 삭제 현상이다.",
                "2": "삽입 이상이란 릴레이션에서 데이터를 삽입할 때 의도와는 상관없이 원하지 않는 값들로 함께 삽입되는 현상이다.",
                "3": "갱신 이상이란 릴레이션에서 튜플에 있는 속성값을 갱신할 때 일부 튜플의 정보만 갱신되어 정보에 모순이 생기는 현상이다.",
                "4": "종속 이상이란 하나의 릴레이션에 하나 이상의 함수적 종속성이 존재하는 현상이다."
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 46,
            "question_type": "multiple_choice",
            "question_description": "다음 설명에 해당하는 트랜잭션의 특성은?",
            "additional_content": "**설명:**\n\n시스템이 가지고 있는 고정요소는 트랜잭션 수행 전과 트랜잭션 수행 완료 후의 상태가 같아야 한다.",
            "choices": {
                "1": "원자성",
                "2": "일관성",
                "3": "격리성",
                "4": "영속성"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 47,
            "question_type": "multiple_choice",
            "question_description": "뷰(VIEW)에 대한 설명으로 옳지 않은 것은?",
            "additional_content": null,
            "choices": {
                "1": "DBA는 보안 측면에서 뷰를 활용할 수 있다.",
                "2": "뷰 위에 또 다른 뷰를 정의할 수 있다.",
                "3": "뷰에 대한 삽입, 갱신, 삭제 연산 시 제약사항이 따르지 않는다.",
                "4": "독립적인 인덱스를 가질 수 없다."
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 48,
            "question_type": "multiple_choice",
            "question_description": "다음 SQL문의 실행 결과는?",
            "additional_content": "**SQL문:**\n```sql\nSELECT 이름\nFROM R1\nWHERE 학번 IN (SELECT 학번 FROM R2 WHERE 과목번호 = 'C100');\n```\n\n**R1 테이블:**\n| 학번 | 이름 | 학년 | 학과 | 주소 |\n|------|------|------|------|------|\n| 1001 | 홍길동 | 1 | 전산 | 서울 |\n| 1002 | 김철수 | 2 | 전자 | 부산 |\n| 1003 | 강남길 | 1 | 전산 | 대구 |\n| 1004 | 오말자 | 3 | 전자 | 인천 |\n| 1005 | 장미화 | 2 | 전산 | 광주 |\n\n**R2 테이블:**\n| 학번 | 과목번호 | 성적 | 점수 |\n|------|----------|------|------|\n| 1001 | C100 | A | 95 |\n| 1001 | C200 | B | 85 |\n| 1002 | C100 | A | 90 |\n| 1002 | C300 | C | 75 |\n| 1003 | C200 | B | 80 |\n| 1003 | C300 | A | 92 |\n| 1004 | C100 | B | 88 |\n| 1004 | C200 | A | 96 |\n| 1005 | C100 | C | 78 |\n| 1005 | C200 | B | 82 |\n| 1005 | C300 | A | 94 |",
            "choices": {
                "1": "홍길동, 김철수, 오말자",
                "2": "홍길동, 김철수, 장미화",
                "3": "홍길동, 김철수, 오말자, 장미화",
                "4": "홍길동, 김철수"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 49,
            "question_type": "multiple_choice",
            "question_description": "관계대수 연산 중 수평적 부분집합을 구성하고 그리스 문자 시그마(σ)를 사용하는 연산은?",
            "additional_content": null,
            "choices": {
                "1": "Select",
                "2": "Project",
                "3": "Join",
                "4": "Division"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 50,
            "question_type": "multiple_choice",
            "question_description": "관계 데이터 모델에서 릴레이션(relation)에 대한 설명으로 옳은 것은?",
            "additional_content": null,
            "choices": {
                "1": "스키마는 릴레이션의 구조와 제약조건을 정의한 것이다.",
                "2": "튜플은 릴레이션의 행을 의미하며, 속성의 집합이다.",
                "3": "도메인은 릴레이션에서 하나의 행을 의미한다.",
                "4": "속성은 릴레이션의 열을 의미하며, 필드라고도 한다."
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 51,
            "question_type": "multiple_choice",
            "question_description": "데이터베이스 전체를 정의하고 데이터 개체, 관계, 제약조건, 접근권한, 무결성 규칙 등을 명세하는 스키마는?",
            "additional_content": null,
            "choices": {
                "1": "개념 스키마",
                "2": "내부 스키마",
                "3": "외부 스키마",
                "4": "내용 스키마"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 52,
            "question_type": "multiple_choice",
            "question_description": "3NF(제3정규형)에서 BCNF(보이스/코드 정규형)가 되기 위한 조건은?",
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
            "category_id": 3,
            "question_number": 53,
            "question_type": "multiple_choice",
            "question_description": "\"어떤 릴레이션 R에 속한 모든 도메인이 원자값(Atomic Value)만으로 되어 있다\"는 정의가 설명하는 기본 정규형은?",
            "additional_content": null,
            "choices": {
                "1": "제1정규형",
                "2": "제2정규형",
                "3": "제3정규형",
                "4": "보이스/코드 정규형"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 54,
            "question_type": "multiple_choice",
            "question_description": "테이블 생성 후 특정 필드(컬럼)가 누락되어 이를 추가할 때 사용하는 SQL 명령어는?",
            "additional_content": null,
            "choices": {
                "1": "DELETE",
                "2": "RESTORE",
                "3": "ALTER",
                "4": "ACCESS"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 55,
            "question_type": "multiple_choice",
            "question_description": "SQL에서 스키마, 도메인, 테이블, 뷰, 인덱스 등을 정의하거나 변경, 삭제할 때 사용하는 언어는?",
            "additional_content": null,
            "choices": {
                "1": "DML",
                "2": "DDL",
                "3": "DCL",
                "4": "IDL"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 56,
            "question_type": "multiple_choice",
            "question_description": "릴레이션 R1의 외래키를 변경할 때 참조하는 릴레이션 R2의 기본키도 변경해야 하는 경우를 무엇이라고 하는가?",
            "additional_content": null,
            "choices": {
                "1": "정보 무결성",
                "2": "고유 무결성",
                "3": "널 제약성",
                "4": "참조 무결성"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 57,
            "question_type": "multiple_choice",
            "question_description": "트랜잭션 수행 중 장애로 손상된 데이터베이스를 정상 상태로 복구시키는 작업은?",
            "additional_content": null,
            "choices": {
                "1": "Recovery",
                "2": "Commit",
                "3": "Abort",
                "4": "Restart"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 58,
            "question_type": "multiple_choice",
            "question_description": "E-R 다이어그램의 표기법 중 옳지 않은 것은?",
            "additional_content": null,
            "choices": {
                "1": "개체 타입 - 사각형",
                "2": "속성 - 타원",
                "3": "관계 집합 - 삼각형",
                "4": "개체 타입과 속성 연결 - 선"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 59,
            "question_type": "multiple_choice",
            "question_description": "병행제어의 로킹(Locking) 단위에 대한 설명 중 옳지 않은 것은?",
            "additional_content": null,
            "choices": {
                "1": "로킹 단위의 크기가 작아지면 로킹 오버헤드가 감소한다.",
                "2": "로킹 단위가 작아지면 데이터베이스 공유도가 증가한다.",
                "3": "로킹 단위가 작아지면 병행성 수준이 낮아진다.",
                "4": "로킹 단위의 종류에는 데이터베이스, 파일, 레코드 등이 있다."
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 60,
            "question_type": "multiple_choice",
            "question_description": "다음 결과를 얻기 위한 올바른 SQL문은?",
            "additional_content": "**[공급자] 테이블:**\n| 공급자번호 | 공급자명 | 위치 |\n|------------|----------|------|\n| 16 | 대신공업사 | 수원 |\n| 27 | 삼진사 | 서울 |\n| 39 | 삼양사 | 인천 |\n| 62 | 진아공업사 | 대전 |\n| 70 | 신촌상사 | 서울 |\n\n**[결과]:**\n| 공급자번호 | 공급자명 | 위치 |\n|------------|----------|------|\n| 16 | 대신공업사 | 수원 |\n| 70 | 신촌상사 | 서울 |",
            "choices": {
                "1": "SELECT * FROM 공급자 WHERE 위치 LIKE '%원%' OR 위치 IS NOT NULL;",
                "2": "SELECT * FROM 공급자 WHERE 위치 LIKE '%원%' AND 위치 IS NOT NULL;",
                "3": "SELECT * FROM 공급자 WHERE 위치 LIKE '%원%' OR 위치 = '서울';",
                "4": "SELECT * FROM 공급자 WHERE 위치 LIKE '%원%' AND 위치 = '서울';"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 61,
            "question_type": "multiple_choice",
            "question_description": "운영체제를 기능별로 분류할 때 제어 프로그램이 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "데이터 관리 프로그램",
                "2": "서비스 프로그램",
                "3": "작업 제어 프로그램",
                "4": "감시 프로그램"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 62,
            "question_type": "multiple_choice",
            "question_description": "데드락(Deadlock)이 발생하기 위한 조건이 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "Mutual exclusion",
                "2": "Hold and wait",
                "3": "Non-preemption",
                "4": "Linear wait"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 63,
            "question_type": "multiple_choice",
            "question_description": "메모리 관리에서 사용 가능한 공간이 15K, 23K, 22K, 21K일 때 17K 프로그램을 \"First Fit\" 방식으로 적재할 경우 내부 단편화의 크기는?",
            "additional_content": "**First Fit 방식**: 첫 번째로 발견되는 충분한 크기의 공간에 할당\n\n**사용 가능한 공간**: 15K, 23K, 22K, 21K\n**프로그램 크기**: 17K\n\n**할당 과정**:\n- 15K: 부족 (17K > 15K)\n- 23K: 충분 (23K > 17K) → 할당\n- 내부 단편화 = 23K - 17K = 6K",
            "choices": {
                "1": "5K",
                "2": "6K",
                "3": "7K",
                "4": "8K"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 64,
            "question_type": "multiple_choice",
            "question_description": "결합도(Coupling)의 종류를 응집도가 낮은 것부터 높은 순서로 나열한 것은?",
            "additional_content": "**결합도 종류:**\n\nㄱ. 내용 결합도 (Content Coupling)\nㄴ. 자료 결합도 (Data Coupling)\nㄷ. 공통 결합도 (Common Coupling)\nㄹ. 스탬프 결합도 (Stamp Coupling)\nㅁ. 외부 결합도 (External Coupling)\nㅂ. 제어 결합도 (Control Coupling)\n\n**응집도 순서 (낮음 → 높음):**\nㄱ → ㄷ → ㅁ → ㅂ → ㄹ → ㄴ",
            "choices": {
                "1": "ㄱ → ㄷ → ㅁ → ㅂ → ㄹ → ㄴ",
                "2": "ㄱ → ㄷ → ㅂ → ㅁ → ㄹ → ㄴ",
                "3": "ㄱ → ㅁ → ㄷ → ㅂ → ㄹ → ㄴ",
                "4": "ㄱ → ㅂ → ㄷ → ㅁ → ㄹ → ㄴ"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 65,
            "question_type": "multiple_choice",
            "question_description": "가상 메모리 구현 기법에서 프로그램을 고정 크기 블록으로 나누는 기법 (㉮)과 가변 크기 블록으로 나누는 기법 (㉯)은?",
            "additional_content": "**가상 메모리 구현 기법:**\n\n- **고정 크기 블록**: 페이징(Paging)\n- **가변 크기 블록**: 세그멘테이션(Segmentation)",
            "choices": {
                "1": "㉮ 페이징, ㉯ 세그멘테이션",
                "2": "㉮ 세그멘테이션, ㉯ 할당",
                "3": "㉮ 세그멘테이션, ㉯ 압축",
                "4": "㉮ 페이징, ㉯ 링킹"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 66,
            "question_type": "multiple_choice",
            "question_description": "C 언어 라이브러리 함수 중 문자열을 정수로 변환하는 함수는?",
            "additional_content": null,
            "choices": {
                "1": "atoi()",
                "2": "atof()",
                "3": "itoa()",
                "4": "ceil()"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 67,
            "question_type": "multiple_choice",
            "question_description": "WAS(Web Application Server)가 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "JEUS",
                "2": "JVM",
                "3": "Tomcat",
                "4": "WebSphere"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 68,
            "question_type": "multiple_choice",
            "question_description": "C 언어에서 산술 연산자가 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "%",
                "2": "*",
                "3": "/",
                "4": "="
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 69,
            "question_type": "multiple_choice",
            "question_description": "OSI 7계층 모델에서 물리적 연결을 통하여 동기화, 오류 제어, 흐름 제어 등 전송 오류를 제어하는 계층은?",
            "additional_content": null,
            "choices": {
                "1": "데이터 링크 계층",
                "2": "물리 계층",
                "3": "응용 계층",
                "4": "표현 계층"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 70,
            "question_type": "multiple_choice",
            "question_description": "IEEE 802.3 LAN에서 사용하는 전송 매체 접근 제어(MAC) 방식은?",
            "additional_content": null,
            "choices": {
                "1": "CSMA/CD",
                "2": "Token Bus",
                "3": "Token Ring",
                "4": "Slotted Ring"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 71,
            "question_type": "multiple_choice",
            "question_description": "IPv6에 대한 설명 중 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "멀티캐스트 대신 브로드캐스트를 사용한다.",
                "2": "확장 헤더를 통하여 보안이 강화되었다.",
                "3": "애니캐스트 전송 방식을 지원한다.",
                "4": "128비트 주소 체계를 사용한다."
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 72,
            "question_type": "multiple_choice",
            "question_description": "TCP/IP 프로토콜 스위트에서 TCP가 해당하는 계층은?",
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
            "question_number": 73,
            "question_type": "multiple_choice",
            "question_description": "다음 응집도(Cohesion) 중 가장 높은 것은?",
            "additional_content": null,
            "choices": {
                "1": "절차적 응집도",
                "2": "순차적 응집도",
                "3": "우연적 응집도",
                "4": "논리적 응집도"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 74,
            "question_type": "multiple_choice",
            "question_description": "다음 Java 코드의 실행 결과는?",
            "additional_content": "**Java 코드:**\n```java\nSystem.out.println(\"5 + 2 = \" + 3 + 4);\nSystem.out.println(\"5 + 2 = \" + (3+4));\n```\n\n**실행 결과:**\n- 첫 번째 줄: 문자열 연결 → \"5 + 2 = 34\"\n- 두 번째 줄: 괄호로 인한 연산 → \"5 + 2 = 7\"",
            "choices": {
                "1": "5 + 2 = 34\n5 + 2 = 7",
                "2": "5 + 2 = 7\n5 + 2 = 7",
                "3": "5 + 2 = 34\n5 + 2 = 34",
                "4": "5 + 2 = 7\n5 + 2 = 34"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 75,
            "question_type": "multiple_choice",
            "question_description": "다음 Python 반복문의 실행 결과는?",
            "additional_content": "**Python 코드:**\n```python\nwhile(True):\n    print('A')\n    print('B')\n    print('C')\n    continue\n    print('D')\n```\n\n**실행 결과:**\n- 무한 루프로 A, B, C가 계속 출력\n- continue로 인해 D는 실행되지 않음",
            "choices": {
                "1": "A, B, C가 반복 출력",
                "2": "A, B, C, D가 반복 출력",
                "3": "A만 반복 출력",
                "4": "A, B만 반복 출력"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 76,
            "question_type": "multiple_choice",
            "question_description": "C 언어에서 변수명으로 사용할 수 없는 것은?",
            "additional_content": null,
            "choices": {
                "1": "data02",
                "2": "int01",
                "3": "_sub",
                "4": "short"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 77,
            "question_type": "multiple_choice",
            "question_description": "라이브러리의 개념과 구성에 대한 설명 중 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "라이브러리는 재사용을 위해 모듈화된 프로그램을 의미한다.",
                "2": "프로그래밍 언어는 일반적으로 도움말, 설치 파일, 샘플 코드 등을 라이브러리로 제공한다.",
                "3": "외부 라이브러리는 언어에 내재적으로 갖고 있는 것이고, 표준 라이브러리는 별도로 설치해야 하는 것이다.",
                "4": "라이브러리는 모듈과 패키지를 총칭하는데, 모듈이 개별 파일이라면 패키지는 파일들의 폴더이다."
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 78,
            "question_type": "multiple_choice",
            "question_description": "UDP의 특징은?",
            "additional_content": null,
            "choices": {
                "1": "양방향 연결 지향 서비스이다.",
                "2": "전송 중 링크 유지로 신뢰성이 높다.",
                "3": "순서 제어, 오류 제어, 흐름 제어를 수행한다.",
                "4": "흐름 제어나 순서 제어가 없어 전송 속도가 빠르다."
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 79,
            "question_type": "multiple_choice",
            "question_description": "운영체제의 가상 메모리 관리에서 프로세스가 일정 기간 동안 자주 참조하는 페이지들의 집합을 무엇이라고 하는가?",
            "additional_content": null,
            "choices": {
                "1": "지역성",
                "2": "데드락",
                "3": "스레싱",
                "4": "워킹셋"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 80,
            "question_type": "multiple_choice",
            "question_description": "JAVA에서 변수와 데이터 타입에 대한 설명 중 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "변수는 값을 저장하는 메모리 공간이다.",
                "2": "데이터 타입에 따라 값의 종류와 범위가 달라진다.",
                "3": "char 데이터 타입은 여러 문자를 순차적으로 저장할 때 사용한다.",
                "4": "boolean 데이터 타입은 참/거짓 조건을 저장할 때 사용한다."
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 81,
            "question_type": "multiple_choice",
            "question_description": "다음 내용이 설명하는 것은?",
            "additional_content": "**설명:**\n\n• 블록체인 개발 환경을 클라우드 서비스로 제공하는 개념\n• 블록체인 네트워크에서 노드의 추가와 제거가 용이함\n• 블록체인 인프라를 추상화하여 블록체인 애플리케이션을 만들 수 있는 클라우드 컴퓨팅 플랫폼",
            "choices": {
                "1": "OTT",
                "2": "BaaS",
                "3": "SDDC",
                "4": "Wi-SUN"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 82,
            "question_type": "multiple_choice",
            "question_description": "소프트웨어 개발 방법론 중 CBD(Component Based Development)에 대한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "생산성과 품질을 향상시키고 유지보수 비용을 최소화할 수 있다.",
                "2": "컴포넌트 제작 기법을 통해 재사용성을 향상시킨다.",
                "3": "모듈 분할과 정복에 기반한 하향식 설계 방법이다.",
                "4": "독립적인 컴포넌트 단위로 관리하여 복잡성을 최소화한다."
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 83,
            "question_type": "multiple_choice",
            "question_description": "LOC(Lines of Code) 기법을 이용하여 개발 기간을 계산할 때, 총 라인 수가 36,000라인이고 프로그래머가 6명이며 평균 월 생산성이 300라인/월일 때 개발 기간은?",
            "additional_content": "**LOC 계산 공식:**\n\n개발 기간 = 총 라인 수 ÷ (프로그래머 수 × 월 생산성)\n\n**계산 과정:**\n- 총 라인 수: 36,000라인\n- 프로그래머 수: 6명\n- 월 생산성: 300라인/월\n- 개발 기간 = 36,000 ÷ (6 × 300) = 36,000 ÷ 1,800 = 20개월",
            "choices": {
                "1": "5개월",
                "2": "10개월",
                "3": "15개월",
                "4": "20개월"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 84,
            "question_type": "multiple_choice",
            "question_description": "다음 내용이 설명하는 소프트웨어 개발 모델은?",
            "additional_content": "**설명:**\n\nBoehm이 제안한 고전적인 생명주기 모델로, 선형 순차 모델이라고도 하며, 타당성 조사, 계획, 요구 분석, 설계, 구현, 테스트, 유지보수의 단계를 거쳐 소프트웨어를 개발한다.",
            "choices": {
                "1": "프로토타입 모델",
                "2": "나선형 모델",
                "3": "폭포수 모델",
                "4": "RAD 모델"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 85,
            "question_type": "multiple_choice",
            "question_description": "소프트웨어 공학에 대한 설명 중 가장 거리가 먼 것은?",
            "additional_content": null,
            "choices": {
                "1": "소프트웨어 공학은 소프트웨어의 개발, 운영, 유지보수, 폐기를 체계적으로 접근하는 학문이다.",
                "2": "소프트웨어 제품의 품질을 향상시키고 생산성과 만족도를 높이는 것이 목적이다.",
                "3": "최대한 빠른 시간에 최대 비용으로 소프트웨어를 개발하는 것이 궁극적인 목표이다.",
                "4": "신뢰할 수 있는 소프트웨어를 경제적으로 획득하기 위해 공학적 원칙을 수립하고 적용한다."
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 86,
            "question_type": "multiple_choice",
            "question_description": "다음 중 특성이 다른 암호화 알고리즘은?",
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
            "question_description": "다음 다이어그램이 나타내는 LAN 네트워크 토폴로지의 종류는?",
            "additional_content": "**네트워크 토폴로지 다이어그램:**\n\n```\n    스테이션1\n        ↓\n    스테이션2\n        ↓\n    스테이션3\n        ↓\n    스테이션4\n        ↓\n    스테이션5\n        ↓\n    스테이션1 (순환)\n```\n\n**특징:**\n- 5개의 스테이션이 원형으로 연결\n- 데이터 전송 방향이 시계방향으로 순환\n- 링 형태의 토폴로지",
            "choices": {
                "1": "메시형",
                "2": "스타형",
                "3": "버스형",
                "4": "링형"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 88,
            "question_type": "multiple_choice",
            "question_description": "정보 보안을 위한 암호화에 대한 설명 중 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "평문은 암호화하기 전의 원본 메시지이다.",
                "2": "암호문은 암호화가 적용된 메시지이다.",
                "3": "복호화는 평문을 암호문으로 바꾸는 과정이다.",
                "4": "키는 암호화를 위해 사용되는 값이다."
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 89,
            "question_type": "multiple_choice",
            "question_description": "정보 보안을 위한 접근 제어 정책의 종류가 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "임의적 접근 제어",
                "2": "데이터 변환 접근 제어",
                "3": "강제적 접근 제어",
                "4": "역할 기반 접근 제어"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 90,
            "question_type": "multiple_choice",
            "question_description": "다음 중 정보 보안의 3요소가 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "기밀성",
                "2": "무결성",
                "3": "가용성",
                "4": "휘발성"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 91,
            "question_type": "multiple_choice",
            "question_description": "악의적인 사용자가 소셜 네트워크에서 지인이나 특정 유명인을 사칭하는 공격 기법은?",
            "additional_content": null,
            "choices": {
                "1": "Evil Twin Attack",
                "2": "Phishing",
                "3": "Logic Bomb",
                "4": "Cyberbullying"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 92,
            "question_type": "multiple_choice",
            "question_description": "소프트웨어 비용 추정 기법 중 개발 유형에 따라 Organic, Semi-Detach, Embedded로 분류되는 것은?",
            "additional_content": null,
            "choices": {
                "1": "PUTNAM",
                "2": "COCOMO",
                "3": "FP",
                "4": "SLIM"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 93,
            "question_type": "multiple_choice",
            "question_description": "나선형 모델의 주요 작업이 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "버전 관리",
                "2": "위험 분석",
                "3": "개발",
                "4": "평가"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 94,
            "question_type": "multiple_choice",
            "question_description": "정형화된 분석 절차에 따라 사용자 요구사항을 파악, 문서화하는 체계적 분석방법으로 자료흐름도, 자료사전, 소단위명세서의 특징을 갖는 것은?",
            "additional_content": null,
            "choices": {
                "1": "구조적 개발 방법론",
                "2": "객체지향 개발 방법론",
                "3": "정보공학 방법론",
                "4": "CBD 방법론"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 95,
            "question_type": "multiple_choice",
            "question_description": "전기 및 정보통신기술을 활용하여 전력망을 지능화, 고도화함으로써 고품질의 전력서비스를 제공하고 에너지 이용효율을 극대화하는 전력망은?",
            "additional_content": null,
            "choices": {
                "1": "사물 인터넷",
                "2": "스마트 그리드",
                "3": "디지털 아카이빙",
                "4": "미디어 빅뱅"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 96,
            "question_type": "multiple_choice",
            "question_description": "크래커가 침입하여 백도어를 만들어 놓거나, 설정 파일을 변경했을 때 분석하는 도구는?",
            "additional_content": null,
            "choices": {
                "1": "tripwire",
                "2": "tcpdump",
                "3": "cron",
                "4": "netcat"
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
            "question_description": "공개키 암호에 대한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "10명이 공개키 암호를 사용할 경우 5개의 키가 필요하다.",
                "2": "복호화키는 비공개 되어 있다.",
                "3": "송신자는 수신자의 공개키로 문서를 암호화한다.",
                "4": "공개키 암호로 널리 알려진 알고리즘은 RSA가 있다."
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 99,
            "question_type": "multiple_choice",
            "question_description": "다음 내용이 설명하는 것은?",
            "additional_content": "**설명:**\n\n• 사물통신, 사물인터넷과 같이 대역폭이 제한된 통신환경에 최적화하여 개발된 푸시기술 기반의 경량 메시지 전송 프로토콜\n• 메시지 매개자(Broker)를 통해 송신자가 특정 메시지를 발행하고 수신자가 메시지를 구독하는 방식\n• IBM이 주도하여 개발",
            "choices": {
                "1": "GRID",
                "2": "TELNET",
                "3": "GPN",
                "4": "MQTT"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 100,
            "question_type": "multiple_choice",
            "question_description": "세션 하이재킹을 탐지하는 방법으로 거리가 먼 것은?",
            "additional_content": null,
            "choices": {
                "1": "FTP SYN SEGMENT 탐지",
                "2": "비동기화 상태 탐지",
                "3": "ACK STORM 탐지",
                "4": "패킷의 유실 및 재전송 증가 탐지"
            },
            "score": 1
        }
    ]
} 
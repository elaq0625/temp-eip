const EXAM_DATA_202401 = {
    "year": "2024",
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
            "question_description": "객체지향 분석 방법론 중 E-R 다이어그램을 사용하여 객체의 행위를 모델링하며, 객체 식별, 구조식별, 주체 정의, 속성 및 관계 정의, 서비스 정의 등의 과정으로 구성되는 것은?",
            "additional_content": null,
            "choices": {
                "1": "Coad와 Yourdon 방법",
                "2": "Booch 방법",
                "3": "Jacobson 방법",
                "4": "Wirfs-Brocks 방법"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 2,
            "question_type": "multiple_choice",
            "question_description": "트랜잭션이 올바르게 처리되고 있는지 데이터를 감시하고 제어하는 미들웨어는?",
            "additional_content": null,
            "choices": {
                "1": "RPC",
                "2": "ORB",
                "3": "TP monitor",
                "4": "HUB"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 3,
            "question_type": "multiple_choice",
            "question_description": "자료 흐름도(Data Flow Diagram)의 구성 요소로 옳은 것은?",
            "additional_content": null,
            "choices": {
                "1": "process, data flow, data store, comment",
                "2": "process, data flow, data store, terminator",
                "3": "data flow, data store, terminator, data dictionary",
                "4": "process, data store, terminator, mini-spec"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 4,
            "question_type": "multiple_choice",
            "question_description": "객체지향에서 정보 은닉과 가장 밀접한 관계가 있는 것은?",
            "additional_content": null,
            "choices": {
                "1": "Encapsulation",
                "2": "Class",
                "3": "Method",
                "4": "Instance"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 5,
            "question_type": "multiple_choice",
            "question_description": "다음 중 자료 사전(Data Dictionary)에서 선택의 의미를 나타내는 것은?",
            "additional_content": null,
            "choices": {
                "1": "[ ]",
                "2": "{ }",
                "3": "＋",
                "4": "＝"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 6,
            "question_type": "multiple_choice",
            "question_description": "소프트웨어 개발 단계에서 요구 분석 과정에 대한 설명으로 거리가 먼 것은?",
            "additional_content": null,
            "choices": {
                "1": "분석 결과의 문서화를 통해 향후 유지보수에 유용하게 활용할 수 있다.",
                "2": "개발 비용이 가장 많이 소요되는 단계이다.",
                "3": "자료흐름도, 자료 사전 등이 효과적으로 이용될 수 있다.",
                "4": "보다 구체적인 명세를 위해 소단위 명세서(Mini-Spec)가 활용될 수 있다."
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 7,
            "question_type": "multiple_choice",
            "question_description": "럼바우(Rumbaugh) 분석 기법에서 정보 모델링이라고도 하며 시스템에서 요구되는 객체를 찾아내어 속성과 연산 식별 및 객체들 간의 관계를 규정하여 다이어그램을 표시하는 모델링은?",
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
            "question_number": 8,
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
            "question_number": 9,
            "question_type": "multiple_choice",
            "question_description": "사용자 인터페이스(UI)의 특징으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "구현하고자 하는 결과의 오류를 최소화한다.",
                "2": "사용자의 편의성을 높임으로써 작업시간을 증가시킨다.",
                "3": "막연한 작업 기능에 대해 구체적인 방법을 제시하여 준다.",
                "4": "사용자 중심의 상호 작용이 되도록 한다."
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 10,
            "question_type": "multiple_choice",
            "question_description": "GoF(Gangs of Four) 디자인 패턴에 대한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "Factory Method Pattern은 상위클래스에서 객체를 생성하는 인터페이스를 정의하고, 하위클래스에서 인스턴스를 생성하도록 하는 방식이다.",
                "2": "Prototype Pattern은 Prototype을 먼저 생성하고 인스턴스를 복제하여 사용하는 구조이다.",
                "3": "Bridge Pattern은 기존에 구현되어 있는 클래스에 기능 발생 시 기존 클래스를 재사용할 수 있도록 중간에서 맞춰주는 역할을 한다.",
                "4": "Mediator Pattern은 객체간의 통제와 지시의 역할을 하는 중재자를 두어 객체지향의 목표를 달성하게 해준다."
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 11,
            "question_type": "multiple_choice",
            "question_description": "익스트림 프로그래밍(XP)에 대한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "빠른 개발을 위해 테스트를 수행하지 않는다.",
                "2": "사용자의 요구사항은 언제든지 변할 수 있다.",
                "3": "고객과 직접 대면하며 요구사항을 이야기하기 위해 사용자 스토리(User Story)를 활용할 수 있다.",
                "4": "기존의 방법론에 비해 실용성(Pragmatism)을 강조한 것이라고 볼 수 있다."
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 12,
            "question_type": "multiple_choice",
            "question_description": "대표적으로 DOS 및 Unix 등의 운영체제에서 조작을 위해 사용하던 것으로 정해진 명령 문자열을 입력하여 시스템을 조작하는 사용자 인터페이스(User Interface)는?",
            "additional_content": null,
            "choices": {
                "1": "GUI(Graphical User Interface)",
                "2": "CLI(Command Line Interface)",
                "3": "CUI(Cell User Interface)",
                "4": "MUI(Mobile User Interface)"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 13,
            "question_type": "multiple_choice",
            "question_description": "UML 다이어그램 중 정적 다이어그램이 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "컴포넌트 다이어그램",
                "2": "배치 다이어그램",
                "3": "순차 다이어그램",
                "4": "패키지 다이어그램"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 14,
            "question_type": "multiple_choice",
            "question_description": "다음 내용이 설명하는 UI 설계 도구는?",
            "additional_content": "**UI 설계 도구의 특징:**\n\n• **목적**: 디자인, 사용 방법 설명, 평가 등을 위해 실제 화면과 유사하게 만든 정적인 형태의 모형\n• **구현 방식**: 시각적으로만 구성 요소를 배치하는 것으로 일반적으로 실제로 구현되지는 않음\n• **용도**: 사용자 인터페이스의 시각적 레이아웃과 디자인을 미리 확인하기 위한 도구",
            "choices": {
                "1": "스토리보드(Storyboard)",
                "2": "목업(Mockup)",
                "3": "프로토타입(Prototype)",
                "4": "유스케이스(Usecase)"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 15,
            "question_type": "multiple_choice",
            "question_description": "요구사항 분석에서 비기능적(Nonfunctional) 요구에 대한 설명으로 옳은 것은?",
            "additional_content": null,
            "choices": {
                "1": "시스템의 처리량(Throughput), 반응 시간 등의 성능 요구나 품질 요구는 비기능적 요구에 해당하지 않는다.",
                "2": "'차량 대여 시스템이 제공하는 모든 화면이 3초 이내에 사용자에게 보여야 한다'는 비기능적 요구이다.",
                "3": "시스템 구축과 관련된 안전, 보안에 대한 요구사항들은 비기능적 요구에 해당하지 않는다.",
                "4": "'금융 시스템은 조회, 인출, 입금, 송금의 기능이 있어야 한다'는 비기능적 요구이다."
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 16,
            "question_type": "multiple_choice",
            "question_description": "명백한 역할을 가지고 독립적으로 존재할 수 있는 시스템의 부분으로 넓은 의미에서는 재사용되는 모든 단위라고 볼 수 있으며, 인터페이스를 통해서만 접근할 수 있는 것은?",
            "additional_content": null,
            "choices": {
                "1": "Model",
                "2": "Sheet",
                "3": "Component",
                "4": "Cell"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 17,
            "question_type": "multiple_choice",
            "question_description": "다음 중 SOLID 원칙이라고 불리는 객체지향 설계 원칙에 속하지 않는 것은?",
            "additional_content": null,
            "choices": {
                "1": "ISP(Interface Segregation Principle)",
                "2": "DIP(Dependency Inversion Principle)",
                "3": "LSP(Liskov Substitution Principle)",
                "4": "SSO(Single Sign On)"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 18,
            "question_type": "multiple_choice",
            "question_description": "UML 확장 모델에서 스테레오 타입 객체를 표현할 때 사용하는 기호로 맞는 것은?",
            "additional_content": null,
            "choices": {
                "1": "<< >>",
                "2": "(())",
                "3": "{{ }}",
                "4": "[[]]"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 19,
            "question_type": "multiple_choice",
            "question_description": "CASE(Computer-Aided Software Engineering)의 원천 기술이 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "구조적 기법",
                "2": "프로토타이핑 기술",
                "3": "정보 저장소 기술",
                "4": "일괄처리 기술"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 20,
            "question_type": "multiple_choice",
            "question_description": "다음 중 상태 다이어그램에서 객체 전이의 요인이 되는 요소는?",
            "additional_content": null,
            "choices": {
                "1": "event",
                "2": "state",
                "3": "message",
                "4": "transition"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 21,
            "question_type": "multiple_choice",
            "question_description": "EAI(Enterprise Application Integration)의 구축 유형으로 옳지 않은 것은?",
            "additional_content": null,
            "choices": {
                "1": "Point-to-Point",
                "2": "Hub & Spoke",
                "3": "Message Bus",
                "4": "Tree"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 22,
            "question_type": "multiple_choice",
            "question_description": "검증 검사 기법 중 개발자의 장소에서 사용자가 개발자 앞에서 행하는 기법이며, 일반적으로 통제된 환경에서 사용자와 개발자가 함께 확인하면서 수행되는 검사는?",
            "additional_content": null,
            "choices": {
                "1": "동치 분할 검사",
                "2": "형상 검사",
                "3": "알파 검사",
                "4": "베타 검사"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 23,
            "question_type": "multiple_choice",
            "question_description": "다음 트리의 차수(degree)는?",
            "additional_content": "```mermaid\ngraph TD\n    A --> B\n    A --> C\n    B --> D\n    B --> E\n    B --> F\n    C --> G\n    E --> H\n    E --> I\n```",
            "choices": {
                "1": "2",
                "2": "3",
                "3": "4",
                "4": "5"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 24,
            "question_type": "multiple_choice",
            "question_description": "인터페이스 구현 시 사용하는 기술 중 다음 내용이 설명하는 것은?",
            "additional_content": "**기술의 특징:**\n\n• **언어**: JavaScript\n• **통신 방식**: 비동기 통신\n• **데이터 형식**: XML\n• **용도**: 클라이언트와 서버간에 XML 데이터를 주고받는 기술",
            "choices": {
                "1": "Procedure",
                "2": "Trigger",
                "3": "Greedy",
                "4": "AJAX"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 25,
            "question_type": "multiple_choice",
            "question_description": "해싱 함수 중 레코드 키를 여러 부분으로 나누고, 나눈 부분의 각 숫자를 더하거나 XOR한 값을 홈 주소로 사용하는 방식은?",
            "additional_content": null,
            "choices": {
                "1": "제산법",
                "2": "폴딩법",
                "3": "기수 변환법",
                "4": "숫자 분석법"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 26,
            "question_type": "multiple_choice",
            "question_description": "다음 자료에 대하여 선택(Selection) 정렬을 이용하여 오름차순으로 정렬하고자 한다. 3회전 후의 결과로 옳은 것은?",
            "additional_content": "**정렬 대상 데이터:**\n```\n37, 14, 17, 40, 35\n```\n\n**정렬 방법**: 선택 정렬 (Selection Sort)\n**정렬 순서**: 오름차순\n**구해야 할 것**: 3회전 후의 결과",
            "choices": {
                "1": "14, 17, 37, 40, 35",
                "2": "14, 37, 17, 40, 35",
                "3": "17, 14, 37, 35, 40",
                "4": "14, 17, 35, 40, 37"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 27,
            "question_type": "multiple_choice",
            "question_description": "소스 코드 품질 분석 도구 중 정적 분석 도구가 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "pmd",
                "2": "checkstyle",
                "3": "valance",
                "4": "cppcheck"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 28,
            "question_type": "multiple_choice",
            "question_description": "다음 트리에 대한 중위 순회 운행 결과는?",
            "additional_content": "```mermaid\ngraph TD\n    A --> B\n    A --> C\n    B --> D\n    B --> E\n    C --> F\n```",
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
            "question_number": 29,
            "question_type": "multiple_choice",
            "question_description": "소프트웨어 테스트와 관련한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "화이트박스 테스트는 모듈의 논리적인 구조를 체계적으로 점검할 수 있다.",
                "2": "블랙박스 테스트는 프로그램의 구조를 고려하지 않는다.",
                "3": "테스트 케이스에는 일반적으로 시험 조건, 테스트 데이터, 예상 결과가 포함되어야 한다.",
                "4": "화이트박스 테스트에서 기본 경로(Basis Path)란 흐름 그래프의 시작 노드에서 종료 노드까지의 서로 독립된 경로로 싸이클을 허용하지 않는 경로를 말한다."
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 30,
            "question_type": "multiple_choice",
            "question_description": "소프트웨어 형상 관리에 대한 설명으로 거리가 먼 것은?",
            "additional_content": null,
            "choices": {
                "1": "소프트웨어에 가해지는 변경을 제어하고 관리한다.",
                "2": "프로젝트 계획, 분석서, 설계서, 프로그램, 테스트 케이스 모두 관리 대상이다.",
                "3": "대표적인 형상 관리 도구로 Ant, Maven, Gradle 등이 있다.",
                "4": "유지 보수 단계뿐만 아니라 개발 단계에도 적용할 수 있다."
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 31,
            "question_type": "multiple_choice",
            "question_description": "최악의 경우 검색 효율이 가장 나쁜 트리 구조는?",
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
            "question_number": 32,
            "question_type": "multiple_choice",
            "question_description": "선형 자료구조로만 구성된 그룹은?",
            "additional_content": null,
            "choices": {
                "1": "Stack, Tree, Queue",
                "2": "Deque, List, Graph",
                "3": "Stack, Queue, List",
                "4": "Tree, Graph, Queue"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 33,
            "question_type": "multiple_choice",
            "question_description": "화이트박스 테스트 기법 중 올바른 쌍은?",
            "additional_content": "**화이트박스 테스트 기법들:**\n\n가. Data Flow Testing\n나. Loop Testing\n다. Equivalence Partitioning\n라. Boundary Value Analysis\n마. Cause-Effect Graphing\n바. Error Guessing",
            "choices": {
                "1": "가, 나",
                "2": "다, 라",
                "3": "마, 바",
                "4": "가, 마"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 34,
            "question_type": "multiple_choice",
            "question_description": "단위 테스트에서 Top-down 테스트 시 하위 모듈을 호출하고 매개변수를 전달하기 위해 필요한 가상 모듈은?",
            "additional_content": null,
            "choices": {
                "1": "Test Stub",
                "2": "Test Driver",
                "3": "Test Suites",
                "4": "Test Case"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 35,
            "question_type": "multiple_choice",
            "question_description": "인터페이스 구현 시 속성-값 쌍으로 구성된 데이터 객체를 전송하기 위해 사용하는 개방형 표준 형식은?",
            "additional_content": null,
            "choices": {
                "1": "JSON",
                "2": "HTML",
                "3": "AVPN",
                "4": "DOF"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 36,
            "question_type": "multiple_choice",
            "question_description": "DRM(Digital Rights Management)에 대한 설명 중 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "디지털 콘텐츠의 불법 복제를 방지하고 저작권을 보호하는 기술이다.",
                "2": "콘텐츠의 생성, 배포, 이용에 이르는 전 과정을 관리한다.",
                "3": "Clearing House는 저작권자와 이용자 간의 중재 역할을 한다.",
                "4": "보안을 위해 암호화 기술을 사용하지 않는다."
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 37,
            "question_type": "multiple_choice",
            "question_description": "Test Oracle에 대한 설명 중 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "Sampling Oracle은 일부 입력에 대해서만 예상 결과를 제공한다.",
                "2": "Total Oracle은 모든 입력에 대해 예상 결과를 제공한다.",
                "3": "Heuristic Oracle은 경험적 지식을 바탕으로 예상 결과를 제공한다.",
                "4": "Consistency Check Oracle은 입력과 출력 간의 일관성을 검사하지 않는다."
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 38,
            "question_type": "multiple_choice",
            "question_description": "인터페이스 구현 검증 도구가 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "ESB",
                "2": "xUnit",
                "3": "STAF",
                "4": "NTAF"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 39,
            "question_type": "multiple_choice",
            "question_description": "5개의 정점을 가진 방향 그래프에서 자기 루프와 다중 간선을 제외한 최대 간선의 수는?",
            "additional_content": null,
            "choices": {
                "1": "7",
                "2": "10",
                "3": "20",
                "4": "27"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 40,
            "question_type": "multiple_choice",
            "question_description": "물리적 데이터 저장 파티션 설계에서 올바른 파티션 유형이 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "Range Partitioning",
                "2": "Hash Partitioning",
                "3": "Composite Partitioning",
                "4": "Unit Partitioning"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 41,
            "question_type": "multiple_choice",
            "question_description": "참조 무결성과 DROP 문에서 부모 테이블 항목이 삭제될 때 자식 테이블의 해당 레코드도 자동으로 삭제하는 옵션은?",
            "additional_content": null,
            "choices": {
                "1": "CLUSTER",
                "2": "CASCADE",
                "3": "SET-NULL",
                "4": "RESTRICTED"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 42,
            "question_type": "multiple_choice",
            "question_description": "View에 대한 설명 중 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "View는 SELECT 문으로 정의된다.",
                "2": "View는 논리적 데이터 독립성을 제공한다.",
                "3": "View는 DROP VIEW 문으로 제거된다.",
                "4": "View는 물리적으로 존재하는 테이블이다."
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 43,
            "question_type": "multiple_choice",
            "question_description": "DML(Data Manipulation Language)에 해당하는 SQL 명령어로만 구성된 것은?",
            "additional_content": null,
            "choices": {
                "1": "DELETE, UPDATE, CREATE",
                "2": "ALTER, INSERT, SELECT",
                "3": "INSERT, UPDATE, DELETE",
                "4": "CREATE, DROP, ALTER"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 44,
            "question_type": "multiple_choice",
            "question_description": "관계 대수에서 순수 관계 연산자가 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "Select",
                "2": "Cartesian Product",
                "3": "Division",
                "4": "Project"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 45,
            "question_type": "multiple_choice",
            "question_description": "관계 데이터 모델에서 기본키의 속성 값은 NULL이 아닌 원자 값이어야 한다는 무결성 제약조건은?",
            "additional_content": null,
            "choices": {
                "1": "Entity Integrity",
                "2": "Referential Integrity",
                "3": "Domain Integrity",
                "4": "Tuple Uniqueness"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 46,
            "question_type": "multiple_choice",
            "question_description": "3NF(Third Normal Form)에서 BCNF(Boyce-Codd Normal Form)로 정규화할 때 수행하는 작업은?",
            "additional_content": null,
            "choices": {
                "1": "원자 도메인으로 분해",
                "2": "부분 함수적 종속성 제거",
                "3": "이행적 함수적 종속성 제거",
                "4": "결정자가 후보키가 아닌 함수적 종속성 제거"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 47,
            "question_type": "multiple_choice",
            "question_description": "Locking 기법에 대한 설명 중 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "Locking의 세분성은 동시성을 높인다.",
                "2": "Locking은 동시성 제어에 사용된다.",
                "3": "Locking은 오버헤드를 발생시킨다.",
                "4": "Locking은 데드락을 방지한다."
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 48,
            "question_type": "multiple_choice",
            "question_description": "다음 SQL UPDATE 문에서 빈칸에 들어갈 키워드는?",
            "additional_content": "```sql\nUPDATE 회원( ) 전화번호='010-14'\nWHERE 회원번호='N4';\n```",
            "choices": {
                "1": "FROM",
                "2": "SET",
                "3": "INTO",
                "4": "TO"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 49,
            "question_type": "multiple_choice",
            "question_description": "데이터 엔티티, 관계, 제약조건, 접근 권한, 무결성 규칙을 포함하여 전체 데이터베이스를 정의하는 스키마는?",
            "additional_content": null,
            "choices": {
                "1": "Conceptual Schema",
                "2": "Internal Schema",
                "3": "External Schema",
                "4": "Content Schema"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 50,
            "question_type": "multiple_choice",
            "question_description": "시스템 카탈로그에 대한 설명 중 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "사용자가 SQL을 통해 직접 업데이트할 수 있다.",
                "2": "데이터 객체의 정의를 유지한다.",
                "3": "DBMS가 생성하고 유지하는 특수 테이블들의 집합이다.",
                "4": "메타데이터를 저장한다."
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 51,
            "question_type": "multiple_choice",
            "question_description": "다음 릴레이션의 카디널리티와 차수는?",
            "additional_content": "| 아이디 | 성명 | 나이 | 등급 | 적립금 | 가입년도 |\n|--------|------|------|------|--------|----------|\n| yuyu01 | 원유철 | 36 | 3 | 2000 | 2008 |\n| sykim10 | 김성일 | 29 | 2 | 3300 | 2014 |\n| kshan4 | 한경선 | 45 | 3 | 2800 | 2009 |\n| namsu52 | 이남수 | 33 | 5 | 1000 | 2016 |",
            "choices": {
                "1": "카디널리티: 4, 차수: 4",
                "2": "카디널리티: 4, 차수: 6",
                "3": "카디널리티: 6, 차수: 4",
                "4": "카디널리티: 6, 차수: 6"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 52,
            "question_type": "multiple_choice",
            "question_description": "동시성 제어 기법이 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "Locking 기법",
                "2": "Time-sharing 기법",
                "3": "Timestamp 기법",
                "4": "Multi-version 기법"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 53,
            "question_type": "multiple_choice",
            "question_description": "데이터 속성 간의 종속성을 충분히 고려하지 못한 설계가 부족한 데이터베이스에서 데이터 처리 시 발생할 수 있는 이상 현상이 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "검색 이상",
                "2": "삽입 이상",
                "3": "삭제 이상",
                "4": "갱신 이상"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 54,
            "question_type": "multiple_choice",
            "question_description": "두 개 이상의 트랜잭션이 동시에 실행될 때, 한 트랜잭션의 연산이 다른 트랜잭션의 연산에 간섭하지 않도록 보장하는 트랜잭션의 성질은?",
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
            "question_number": 55,
            "question_type": "multiple_choice",
            "question_description": "다음 내용이 설명하는 관계 데이터베이스의 키는?",
            "additional_content": "**키의 정의:**\n\n릴레이션 내의 속성 집합으로 릴레이션의 모든 튜플에 대해 유일성을 만족하지만 최소성은 만족하지 않는 키",
            "choices": {
                "1": "Candidate Key",
                "2": "Alternate Key",
                "3": "Superkey",
                "4": "Foreign Key"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 56,
            "question_type": "multiple_choice",
            "question_description": "물리적 데이터베이스 설계에 대한 설명 중 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "효율적인 데이터 저장을 목적으로 한다.",
                "2": "트랜잭션 처리량, 응답 시간, 디스크 용량을 고려한다.",
                "3": "레코드 형식, 순서, 접근 경로 등의 정보를 활용한다.",
                "4": "트랜잭션 인터페이스 설계를 포함하지 않는다."
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 57,
            "question_type": "multiple_choice",
            "question_description": "관계 해석에서 '모든 것에 대하여'를 나타내는 논리 기호는?",
            "additional_content": null,
            "choices": {
                "1": "∃",
                "2": "∈",
                "3": "∀",
                "4": "⊂"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 58,
            "question_type": "multiple_choice",
            "question_description": "다음 조건을 만족하는 SQL 문에서 빈칸에 들어갈 것은?",
            "additional_content": "**조건:** 이름이 '정도일'인 팀원이 속한 팀의 팀 코드를 이용하여 해당 팀에 속한 팀원들의 이름을 출력하는 SQL 문을 작성하라.\n\n**SQL 문:**\n```sql\nSELECT 이름\nFROM 직원\nWHERE 팀코드=( );\n```",
            "choices": {
                "1": "WHERE 이름='정도일'",
                "2": "SELECT 팀코드 FROM 직원 WHERE 이름='정도일'",
                "3": "FROM 직원 WHERE 이름='정도일'",
                "4": "GROUP BY 팀코드 HAVING 이름='정도일'"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 59,
            "question_type": "multiple_choice",
            "question_description": "프로세스와 테이블 간의 생성, 읽기, 갱신, 삭제(CRUD) 작업을 매트릭스로 작성하여 트랜잭션을 분석하는 방법은?",
            "additional_content": null,
            "choices": {
                "1": "CASE Analysis",
                "2": "Match Analysis",
                "3": "CRUD Analysis",
                "4": "Association Analysis"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 60,
            "question_type": "multiple_choice",
            "question_description": "관계형, 계층형, 네트워크형 등 다양한 데이터베이스 유형을 분류하는 기준은?",
            "additional_content": null,
            "choices": {
                "1": "Object",
                "2": "Relationship",
                "3": "Attribute",
                "4": "Constraint"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 61,
            "question_type": "multiple_choice",
            "question_description": "C언어의 문자열 처리 함수 중 형식과 기능의 연결이 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "strlen(s) - s의 길이를 구한다",
                "2": "strcpy(s1, s2) - s2를 s1에 복사한다",
                "3": "strcat(s1, s2) - s1과 s2를 연결한다",
                "4": "strcmp(s1, s2) - s1과 s2를 비교하여 같으면 1을 반환한다"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 62,
            "question_type": "multiple_choice",
            "question_description": "다음 C언어 프로그램의 실행 결과는?",
            "additional_content": "```c\n#include <stdio.h>\nmain() {\n    int a[10];\n    a[0] = 0;\n    a[1] = 1;\n    for (int i = 0; i < 8; i++)\n        a[i + 2] = a[i + 1] + a[i];\n    printf(\"%d\", a[9]);\n}\n```",
            "choices": {
                "1": "8",
                "2": "13",
                "3": "21",
                "4": "34"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 63,
            "question_type": "multiple_choice",
            "question_description": "IPv6에 대한 설명 중 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "128비트 주소 공간을 가진다.",
                "2": "인증 및 보안 기능이 포함되어 있다.",
                "3": "패킷 크기가 64Kbytes로 고정되어 있다.",
                "4": "확장 헤더를 통해 네트워크 기능 확장이 용이하다."
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 64,
            "question_type": "multiple_choice",
            "question_description": "파이썬의 변수 작성 규칙 중 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "변수명은 영문자, 숫자, 언더스코어로 구성할 수 있다.",
                "2": "변수명은 숫자로 시작할 수 있다.",
                "3": "변수명은 대소문자를 구분한다.",
                "4": "변수명은 예약어를 사용할 수 없다."
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 65,
            "question_type": "multiple_choice",
            "question_description": "스레드(Thread)에 대한 설명 중 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "스레드는 프로세스 내에서 실행되는 실행 단위이다.",
                "2": "스레드는 독립적인 메모리 공간을 가진다.",
                "3": "스레드는 프로세스보다 생성과 소멸이 빠르다.",
                "4": "스레드는 동시성을 제공한다."
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 66,
            "question_type": "multiple_choice",
            "question_description": "다음 작업에 대하여 HRN 스케줄링을 사용할 때 올바른 처리 순서는?",
            "additional_content": "| 작업 | 대기시간 | 서비스(실행)시간 |\n|------|----------|------------------|\n| A | 0 | 3 |\n| B | 2 | 6 |\n| C | 4 | 4 |\n| D | 6 | 5 |",
            "choices": {
                "1": "A → B → C → D",
                "2": "A → C → B → D",
                "3": "A → D → C → B",
                "4": "A → B → D → C"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 67,
            "question_type": "multiple_choice",
            "question_description": "다음 자바 코드의 실행 결과는?",
            "additional_content": "```java\nint i = 1;\nwhile (i <= 5) {\n    System.out.println(i);\n    i++;\n}\n```",
            "choices": {
                "1": "1, 2, 3, 4, 5",
                "2": "1, 2, 3, 4",
                "3": "2, 3, 4, 5",
                "4": "무한 루프"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 68,
            "question_type": "multiple_choice",
            "question_description": "C언어의 산술 연산자가 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "+",
                "2": "-",
                "3": "*",
                "4": "&&"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 69,
            "question_type": "multiple_choice",
            "question_description": "다음 JAVA 프로그램의 실행 결과는?",
            "additional_content": "```java\npublic class Test {\n    public static void main(String[] args) {\n        int x = 5;\n        System.out.println(x++);\n        System.out.println(--x);\n    }\n}\n```",
            "choices": {
                "1": "5, 4",
                "2": "5, 5",
                "3": "6, 5",
                "4": "6, 6"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 70,
            "question_type": "multiple_choice",
            "question_description": "Class C에 속하는 IP 주소는?",
            "additional_content": null,
            "choices": {
                "1": "192.168.1.1",
                "2": "172.16.1.1",
                "3": "10.0.0.1",
                "4": "224.0.0.1"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 71,
            "question_type": "multiple_choice",
            "question_description": "기억장치 배치 전략에서 Best Fit을 사용할 때 내부 단편화 크기는?",
            "additional_content": "**메모리 블록 크기:** 100K, 200K, 300K, 400K\n**프로그램 크기:** 250K",
            "choices": {
                "1": "50K",
                "2": "100K",
                "3": "150K",
                "4": "200K"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 72,
            "question_type": "multiple_choice",
            "question_description": "페이지 교체 기법에서 FIFO 알고리즘을 사용할 때 페이지 부재 횟수는?",
            "additional_content": "**페이지 참조열:** 7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2, 1, 2, 0, 1, 7, 0\n**페이지 프레임 수:** 3개",
            "choices": {
                "1": "9",
                "2": "10",
                "3": "11",
                "4": "12"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 73,
            "question_type": "multiple_choice",
            "question_description": "UNIX에서 새로운 프로세스를 생성하는 명령어는?",
            "additional_content": null,
            "choices": {
                "1": "fork",
                "2": "exec",
                "3": "wait",
                "4": "exit"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 74,
            "question_type": "multiple_choice",
            "question_description": "페이징 기법에서 페이지 크기가 감소할 때 발생하지 않는 현상은?",
            "additional_content": null,
            "choices": {
                "1": "페이지 테이블 크기 증가",
                "2": "내부 단편화 감소",
                "3": "페이지 부재율 증가",
                "4": "메모리 효율성 감소"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 75,
            "question_type": "multiple_choice",
            "question_description": "C언어에서 논리값 중 하나라도 참이면 1을, 둘 다 거짓이면 0을 반환하는 연산자는?",
            "additional_content": null,
            "choices": {
                "1": "&&",
                "2": "||",
                "3": "!",
                "4": "^"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 76,
            "question_type": "multiple_choice",
            "question_description": "IPv6 주소체계가 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "Unicast",
                "2": "Multicast",
                "3": "Anycast",
                "4": "Broadcast"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 77,
            "question_type": "multiple_choice",
            "question_description": "모듈 결합도에서 한 모듈이 다른 모듈의 내부 논리를 제어 신호로 조정하여 '권한 역전'이 발생하는 결합도는?",
            "additional_content": null,
            "choices": {
                "1": "Data Coupling",
                "2": "Control Coupling",
                "3": "External Coupling",
                "4": "Common Coupling"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 78,
            "question_type": "multiple_choice",
            "question_description": "TCP/IP 프로토콜에서 논리 주소를 물리 주소로 변환하는 프로토콜은?",
            "additional_content": null,
            "choices": {
                "1": "ARP",
                "2": "RARP",
                "3": "ICMP",
                "4": "IGMP"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 79,
            "question_type": "multiple_choice",
            "question_description": "운영체제의 가상기억장치 관리에서 일정 기간 동안 프로세스가 자주 참조하는 페이지들의 집합을 나타내는 용어는?",
            "additional_content": null,
            "choices": {
                "1": "Working Set",
                "2": "Page Frame",
                "3": "Page Table",
                "4": "Page Fault"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 80,
            "question_type": "multiple_choice",
            "question_description": "다음 내용이 설명하는 무선 랜 방식은?",
            "additional_content": "**무선 랜 방식의 특징:**\n\n• 매체가 유휴 상태인지 확인한 후 랜덤한 시간을 기다려 충돌을 피하고 데이터를 전송\n• 데이터 전송이 없어도 확인 신호를 보내는 방식",
            "choices": {
                "1": "CSMA/CA",
                "2": "CSMA/CD",
                "3": "Token Ring",
                "4": "Ethernet"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 81,
            "question_type": "multiple_choice",
            "question_description": "침입 탐지 시스템(IDS)에 대한 설명 중 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "Anomaly Detection은 정상적인 패턴에서 벗어난 행위를 탐지한다.",
                "2": "HIDS는 호스트 기반 침입 탐지 시스템이다.",
                "3": "NIDS는 Snort가 대표적인 도구이다.",
                "4": "IDS는 DMZ에 설치하지 않는다."
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 82,
            "question_type": "multiple_choice",
            "question_description": "다음 내용이 설명하는 용어는?",
            "additional_content": "**시스템의 특징:**\n\n• 공유 디스크를 중심으로 여러 시스템을 클러스터링하여 연결\n• 미션 크리티컬 서버의 안정성을 높이기 위해 널리 사용\n• 두 대의 서버를 연결하여 업무 분산을 위해 사용",
            "choices": {
                "1": "High Availability Solution(HACMP)",
                "2": "Point-to-Point Mode",
                "3": "Stuxnet",
                "4": "Rooting"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 83,
            "question_type": "multiple_choice",
            "question_description": "키오스크에 기기를 가까이 대면 10cm 이내에서 초고속 기가비트 속도로 데이터를 즉시 전송할 수 있는 근거리 무선 통신(NFC) 기술은?",
            "additional_content": null,
            "choices": {
                "1": "BcN",
                "2": "Zing",
                "3": "Marine Navi",
                "4": "C-V2X"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 84,
            "question_type": "multiple_choice",
            "question_description": "세션 하이재킹 탐지와 가장 관련이 적은 방법은?",
            "additional_content": null,
            "choices": {
                "1": "FTP SYN SEGMENT 탐지",
                "2": "비동기화 상태 탐지",
                "3": "ACK STORM 탐지",
                "4": "패킷 손실 및 재전송 증가 탐지"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 85,
            "question_type": "multiple_choice",
            "question_description": "소프트웨어 생명주기 모델 중 나선형 모델(Spiral Model)에 대한 설명 중 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "대규모 시스템에 적합하다.",
                "2": "계획, 위험분석, 공학, 고객평가 순서로 개발한다.",
                "3": "위험 관리가 목적이다.",
                "4": "개발 주기를 한 번만 수행한다."
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 86,
            "question_type": "multiple_choice",
            "question_description": "다음 특징이 설명하는 용어는?",
            "additional_content": "**플랫폼의 특징:**\n\n• 오픈소스 분산 컴퓨팅 플랫폼\n• 일반 PC급 컴퓨터들로 대용량 가상화 저장소를 구성\n• 다양한 소스의 빅데이터를 효율적으로 저장하고 처리",
            "choices": {
                "1": "Hadoop",
                "2": "Beacon",
                "3": "Foursquare",
                "4": "Memristor"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 87,
            "question_type": "multiple_choice",
            "question_description": "키보드 동작을 감지하여 ID, 패스워드 등의 개인정보를 몰래 탈취하는 해킹 공격은?",
            "additional_content": null,
            "choices": {
                "1": "Key Logger Attack",
                "2": "Worm",
                "3": "Rollback",
                "4": "Zombie Worm"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 88,
            "question_type": "multiple_choice",
            "question_description": "COCOMO 모델과 가장 관련이 적은 프로젝트 유형은?",
            "additional_content": null,
            "choices": {
                "1": "Organic",
                "2": "Semi-detached",
                "3": "Embedded",
                "4": "Sequential"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 89,
            "question_type": "multiple_choice",
            "question_description": "다음 표에서 정보 접근 제어 정책의 빈칸(ㄱ)에 들어갈 것은?",
            "additional_content": "| 구분 | ㄱ | DAC | RBAC |\n|------|-----|-----|------|\n| 권한 부여 | 관리자 | 사용자 | 역할 기반 |\n| 접근 결정 | 보안 등급 | 소유자 | 역할 |\n| 정책 변경 | 어려움 | 용이함 | 중간 |\n| 장점 | 보안성 | 유연성 | 관리 용이성 |",
            "choices": {
                "1": "NAC",
                "2": "MAC",
                "3": "SDAC",
                "4": "AAC"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 90,
            "question_type": "multiple_choice",
            "question_description": "정보보안의 3요소에 속하지 않는 것은?",
            "additional_content": null,
            "choices": {
                "1": "Confidentiality",
                "2": "Integrity",
                "3": "Availability",
                "4": "Volatility"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 91,
            "question_type": "multiple_choice",
            "question_description": "CBD(Component Based Development) SW 개발에서 분석 단계의 표준 산출물은?",
            "additional_content": null,
            "choices": {
                "1": "Class Design Document",
                "2": "Integrated Test Result Document",
                "3": "Program Code",
                "4": "User Requirements Definition Document"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 92,
            "question_type": "multiple_choice",
            "question_description": "구글의 Google Brain 팀이 개발하고 공개한 머신러닝용 오픈소스 소프트웨어 라이브러리는?",
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
            "question_number": 93,
            "question_type": "multiple_choice",
            "question_description": "Secure Coding에서 입력 데이터 보안 취약점에 대한 설명 중 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "SQL Injection은 데이터베이스 쿼리를 조작하는 공격이다.",
                "2": "Cross-Site Scripting은 웹 페이지에 악성 스크립트를 삽입하는 공격이다.",
                "3": "OS Command Injection은 운영체제 명령어를 실행하는 공격이다.",
                "4": "Resource Injection은 시스템 자원을 고갈시키는 공격이다."
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 94,
            "question_type": "multiple_choice",
            "question_description": "개발자 2명이 5개월 동안 10,000줄의 코드를 개발했을 때 월간(man-month) 생산성을 측정하는 가장 적절한 계산 방법은?",
            "additional_content": null,
            "choices": {
                "1": "10000/2",
                "2": "10000/(5×2)",
                "3": "10000/5",
                "4": "(2×10000)/5"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 95,
            "question_type": "multiple_choice",
            "question_description": "소프트웨어 재공학의 주요 활동 중 기존 소프트웨어를 다른 운영체제나 하드웨어 환경에서 사용할 수 있도록 변환하는 것은?",
            "additional_content": null,
            "choices": {
                "1": "역공학(Reverse Engineering)",
                "2": "분석(Analysis)",
                "3": "재구성(Restructuring)",
                "4": "이식(Porting)"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 96,
            "question_type": "multiple_choice",
            "question_description": "전자 칩, 즉 블록(모듈)을 만들어 조립하여 소프트웨어를 완성하는 소프트웨어 재사용 방법은?",
            "additional_content": null,
            "choices": {
                "1": "합성 중심(Composition-centric)",
                "2": "생성 중심(Generation-centric)",
                "3": "분리 중심(Separation-centric)",
                "4": "구조 중심(Structure-centric)"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 97,
            "question_type": "multiple_choice",
            "question_description": "다음 내용이 설명하는 것은?",
            "additional_content": "**시스템의 특징:**\n\n• 네트워크상에 광채널 스위치의 이점인 고속 전송과 장거리 연결 및 멀티 프로토콜 기능을 활용\n• 각기 다른 운영체제를 가진 여러 기종들이 네트워크상에서 동일 저장장치의 데이터를 공유하게 함으로써, 여러 개의 저장장치나 백업 장비를 단일화시킨 시스템",
            "choices": {
                "1": "SAN(Storage Area Network)",
                "2": "MBR(Master Boot Record)",
                "3": "NAC(Network Access Control)",
                "4": "NIC(Network Interface Card)"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 98,
            "question_type": "multiple_choice",
            "question_description": "크래커가 침입하여 백도어를 만들거나 설정 파일을 수정했는지 분석할 때 사용하는 도구는?",
            "additional_content": null,
            "choices": {
                "1": "trace",
                "2": "tripwire",
                "3": "udpdump",
                "4": "cron"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 99,
            "question_type": "multiple_choice",
            "question_description": "경험적으로 검증된 개발 보안 방법론 중 하나이며, SW 보안 모범 사례를 SDLC(Software Development Life Cycle)에 통합한 소프트웨어 개발 보안 생명주기 방법론은?",
            "additional_content": null,
            "choices": {
                "1": "CLASP",
                "2": "CWE",
                "3": "PIMS",
                "4": "Seven Touchpoints"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 100,
            "question_type": "multiple_choice",
            "question_description": "소프트웨어 프로세스 개선 및 능력 측정 기준에 대한 국제 표준은?",
            "additional_content": null,
            "choices": {
                "1": "ISO 14001",
                "2": "IEEE 802.5",
                "3": "IEEE 488",
                "4": "SPICE"
            },
            "score": 1
        }
    ]
}
; 
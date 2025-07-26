const EXAM_DATA_202203 = {
    "year": "2022",
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
            "question_description": "소프트웨어 공학에서 워크스루(Walkthrough)에 대한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "유스케이스 확장, 설계 다이어그램 명세, 소스코드, 테스트 케이스 등에 적용할 수 있다",
                "2": "반복, 실시간 처리, 동시 처리 등과 같은 복잡한 알고리즘이나 함수/연산을 이해하는 데 유용하다",
                "3": "검사(Inspection)와 같은 의미이다",
                "4": "간단한 테스트 케이스로 제품을 수동으로 수행하는 것이다"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 2,
            "question_type": "multiple_choice",
            "question_description": "결합도의 종류에 대한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "데이터 결합도 : 모듈 간의 인터페이스가 데이터 요소로만 구성된 경우의 결합도",
                "2": "내용 결합도 : 한 모듈이 다른 모듈의 내부 데이터를 직접 참조하거나 제어 신호를 사용하여 공통 데이터 영역을 공유하는 경우의 결합도",
                "3": "스탬프 결합도 : 모듈 간의 인터페이스로 배열이나 레코드 등의 데이터 구조가 전달되는 경우의 결합도",
                "4": "외부 결합도 : 한 모듈에서 선언된 데이터를 다른 모듈에서 참조하는 경우의 결합도"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 3,
            "question_type": "multiple_choice",
            "question_description": "익스트림 프로그래밍(eXtreme Programming)의 5가지 가치에 해당하지 않는 것은?",
            "additional_content": null,
            "choices": {
                "1": "의사소통(Communication)",
                "2": "단순성(Simplicity)",
                "3": "피드백(Feedback)",
                "4": "고객 배제(Customer exclusion)"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 4,
            "question_type": "multiple_choice",
            "question_description": "HIPO(Hierarchy Input Process Output)에 대한 설명으로 가장 거리가 먼 것은?",
            "additional_content": null,
            "choices": {
                "1": "하향식 소프트웨어 개발을 위한 문서화 도구이다",
                "2": "HIPO 차트의 종류에는 시각적 차트, 개요 차트, 상세 차트가 있다",
                "3": "함수와 데이터 간의 의존 관계를 동시에 표현할 수 있다",
                "4": "보기 쉽고 이해하기 쉽다"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 5,
            "question_type": "multiple_choice",
            "question_description": "모바일 기기에서 사용되는 NUI 인터페이스에 해당하지 않는 것은?",
            "additional_content": null,
            "choices": {
                "1": "핀치(Pinch)",
                "2": "프레스(Press)",
                "3": "플로우(Flow)",
                "4": "플릭(Flick)"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 6,
            "question_type": "multiple_choice",
            "question_description": "UML 확장 모델에서 스테레오 타입 객체를 표현하는 기호로 옳은 것은?",
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
            "question_number": 7,
            "question_type": "multiple_choice",
            "question_description": "Boehm이 제안한 모델로 위험 분석 능력을 가지고 있으며, 여러 번의 개발 과정을 거쳐 점진적으로 개발되는 모델은?",
            "additional_content": null,
            "choices": {
                "1": "스파이럴 모델",
                "2": "애자일 모델",
                "3": "프로토타입 모델",
                "4": "폭포수 모델"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 8,
            "question_type": "multiple_choice",
            "question_description": "누구나 쉽게 이해하고 사용할 수 있어야 한다는 UI 설계 원칙은?",
            "additional_content": null,
            "choices": {
                "1": "희소성",
                "2": "유연성",
                "3": "직관성",
                "4": "다중 조작성"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 9,
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
            "question_number": 10,
            "question_type": "multiple_choice",
            "question_description": "객체지향 설계 원칙인 SOLID 원칙에 해당하지 않는 것은?",
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
            "question_number": 11,
            "question_type": "multiple_choice",
            "question_description": "UML 모델에서 한 객체의 명세 변경이 다른 객체에 영향을 미치는 상황에서, 한 클래스가 다른 클래스를 연산의 매개변수로 사용할 때 일반적으로 표현되는 관계는?",
            "additional_content": null,
            "choices": {
                "1": "연관(Association)",
                "2": "의존(Dependency)",
                "3": "실현(Realization)",
                "4": "일반화(Generalization)"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 12,
            "question_type": "multiple_choice",
            "question_description": "객체에게 행동을 수행하도록 지시하는 명령은?",
            "additional_content": null,
            "choices": {
                "1": "클래스(Class)",
                "2": "패키지(Package)",
                "3": "객체(Object)",
                "4": "메시지(Message)"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 13,
            "question_type": "multiple_choice",
            "question_description": "다음 두 가지 내용이 설명하는 디자인 패턴은?\n• 단일 객체가 생성되면 생성된 객체를 어디서든 참조할 수 있지만, 여러 프로세스가 동시에 참조할 수는 없다.\n• 클래스 내에서 인스턴스가 하나만 존재함을 보장하여 불필요한 메모리 낭비를 최소화한다.",
            "additional_content": null,
            "choices": {
                "1": "싱글톤(Singleton)",
                "2": "어댑터(Adapter)",
                "3": "프로토타입(Prototype)",
                "4": "데코레이터(Decorator)"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 14,
            "question_type": "multiple_choice",
            "question_description": "파이프 필터 형태의 소프트웨어 아키텍처에 대한 설명으로 옳은 것은?",
            "additional_content": null,
            "choices": {
                "1": "노드와 간선으로 구성된다",
                "2": "서브시스템이 입력 데이터를 받아 처리하고 결과를 다음 서브시스템으로 넘겨주는 과정을 반복한다",
                "3": "계층 모델이라고도 한다",
                "4": "3개의 서브시스템(모델, 뷰, 제어)으로 구성되어 있다"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 15,
            "question_type": "multiple_choice",
            "question_description": "대표적으로 DOS 및 Unix 등의 운영체제에서 조작을 위해 사용하던 것으로, 정해진 명령 문자열을 입력하여 시스템을 조작하는 사용자 인터페이스(User Interface)는?",
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
            "question_number": 16,
            "question_type": "multiple_choice",
            "question_description": "UML에서 시퀀스 다이어그램의 구성 항목에 해당하지 않는 것은?",
            "additional_content": null,
            "choices": {
                "1": "생명선(Lifeline)",
                "2": "실행(Execution)",
                "3": "확장(Extension)",
                "4": "메시지(Message)"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 17,
            "question_type": "multiple_choice",
            "question_description": "다음은 어떤 프로그램 구조를 나타낸다. 모듈 F에서의 fan-in과 fan-out의 수는 얼마인가?",
            "additional_content": "**프로그램 구조:**\n- A → B, C, D\n- B → E, F\n- C → F\n- D → F\n- E → G\n- F → G, H",
            "choices": {
                "1": "fan-in: 2, fan-out: 3",
                "2": "fan-in: 3, fan-out: 2",
                "3": "fan-in: 1, fan-out: 2",
                "4": "fan-in: 2, fan-out: 1"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 18,
            "question_type": "multiple_choice",
            "question_description": "객체지향 개념에서 연관된 데이터와 함수를 함께 묶어 외부와 경계를 만들고 필요한 인터페이스만을 밖으로 드러내는 과정은?",
            "additional_content": null,
            "choices": {
                "1": "메시지(Message)",
                "2": "캡슐화(Encapsulation)",
                "3": "다형성(Polymorphism)",
                "4": "상속(Inheritance)"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 19,
            "question_type": "multiple_choice",
            "question_description": "그래픽 표기법을 이용하여 소프트웨어 구성 요소를 모델링하는 럼바우 분석 기법에 포함되지 않는 것은?",
            "additional_content": null,
            "choices": {
                "1": "객체 모델링(Object Modeling)",
                "2": "기능 모델링(Functional Modeling)",
                "3": "동적 모델링(Dynamic Modeling)",
                "4": "블랙박스 분석 모델링(Black-box Analysis Modeling)"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 20,
            "question_type": "multiple_choice",
            "question_description": "분산 컴퓨팅 환경에서 서로 다른 기종 간의 하드웨어나 프로토콜, 통신환경 등을 연결하여 응용 프로그램과 운영환경 간에 원만한 통신이 이루어질 수 있게 서비스를 제공하는 소프트웨어는?",
            "additional_content": null,
            "choices": {
                "1": "미들웨어(Middleware)",
                "2": "하드웨어(Hardware)",
                "3": "오픈허브웨어(Open Hubware)",
                "4": "그레이웨어(Grayware)"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 21,
            "question_type": "multiple_choice",
            "question_description": "소프트웨어 테스트와 관련한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "화이트박스 테스트는 모듈의 논리적인 구조를 체계적으로 점검할 수 있다",
                "2": "블랙박스 테스트는 프로그램의 구조를 고려하지 않는다",
                "3": "테스트 케이스에는 일반적으로 시험 조건, 테스트 데이터, 예상 결과가 포함되어야 한다",
                "4": "화이트박스 테스트에서 기본 경로(Basis Path)란 흐름 그래프의 시작 노드에서 종료 노드까지의 서로 독립된 경로로 싸이클을 허용하지 않는 경로를 말한다"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 22,
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
            "question_number": 23,
            "question_type": "multiple_choice",
            "question_description": "소프트웨어 형상관리(Configuration management)에 관한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "소프트웨어에서 일어나는 수정이나 변경을 알아내고 제어하는 것을 의미한다",
                "2": "소프트웨어 개발의 전체 비용을 줄이고, 개발 과정의 여러 방해 요인이 최소화되도록 보증하는 것을 목적으로 한다",
                "3": "형상관리를 위하여 구성된 팀을 'chief programmer team'이라고 한다",
                "4": "형상관리의 기능 중 하나는 버전 제어 기술이다"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 24,
            "question_type": "multiple_choice",
            "question_description": "다음 트리를 후위 순회(Post Traversal)한 결과는?",
            "additional_content": "**이진 트리 구조:**\n- A (루트)\n- B (A의 왼쪽 자식)\n- C (A의 오른쪽 자식)\n- D (B의 왼쪽 자식)\n- E (B의 오른쪽 자식)\n- F (C의 왼쪽 자식)",
            "choices": {
                "1": "A B D C E F",
                "2": "D B A E C F",
                "3": "A B C D E F",
                "4": "D B E F C A"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 25,
            "question_type": "multiple_choice",
            "question_description": "EAI(Enterprise Application Integration)의 구축 유형으로 옳지 않은 것은?",
            "additional_content": null,
            "choices": {
                "1": "Tree",
                "2": "Hub & Spoke",
                "3": "Message Bus",
                "4": "Point-to-Point"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 26,
            "question_type": "multiple_choice",
            "question_description": "소프트웨어 테스트에서 오류의 80%는 전체 모듈들의 20% 내에서 발견된다는 법칙은?",
            "additional_content": null,
            "choices": {
                "1": "Brooks의 법칙",
                "2": "Boehm의 법칙",
                "3": "Pareto의 법칙",
                "4": "Jackson의 법칙"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 27,
            "question_type": "multiple_choice",
            "question_description": "다음 중 테스트 오라클에 대한 설명으로 옳지 않은 것은?",
            "additional_content": null,
            "choices": {
                "1": "샘플링 오라클 : 특정한 몇몇 테스트 케이스의 입력 값들에 대해서만 기대하는 결과를 제공하는 오라클이다",
                "2": "토탈 오라클 : 모든 테스트 케이스의 입력 값에 대해 기대하는 결과를 제공하는 오라클이다",
                "3": "휴리스틱 오라클 : 특정 테스트 케이스의 입력 값에 대해 기대하는 결과를 제공하고, 나머지 입력 값들에 대해서는 추정으로 처리하는 오라클이다",
                "4": "일관성 검사 오라클 : 애플리케이션의 변경이 있을 경우 테스트 케이스의 수행 전과 후의 결과 값이 동일한지를 확인하는 오라클이다"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 28,
            "question_type": "multiple_choice",
            "question_description": "IPSec(IP Security)에 대한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "암호화 수행시 일방향 암호화만 지원한다",
                "2": "ESP는 발신지 인증, 데이터 무결성, 기밀성 모두를 보장한다",
                "3": "운영 모드는 Tunnel 모드와 Transport 모드로 분류된다",
                "4": "AH는 발신지 호스트를 인증하고, IP 패킷의 무결성을 보장한다"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 29,
            "question_type": "multiple_choice",
            "question_description": "스택(STACK)의 응용 분야로 거리가 먼 것은?",
            "additional_content": null,
            "choices": {
                "1": "인터럽트의 처리",
                "2": "수식의 계산",
                "3": "서브루틴의 복귀 번지 저장",
                "4": "운영체제의 작업 스케줄링"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 30,
            "question_type": "multiple_choice",
            "question_description": "다음 자료에 대하여 선택(Selection) 정렬을 이용하여 오름차순으로 정렬하고자 한다. 1회전 수행 결과는?",
            "additional_content": "**정렬할 자료:** 8, 3, 4, 9, 7",
            "choices": {
                "1": "3, 4, 7, 8, 9",
                "2": "3, 4, 7, 9, 8",
                "3": "3, 4, 8, 9, 7",
                "4": "3, 8, 4, 9, 7"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 31,
            "question_type": "multiple_choice",
            "question_description": "해싱 함수(Hashing Function)의 종류가 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "제곱법(Mid-Square)",
                "2": "숫자 분석법(Digit Analysis)",
                "3": "개방 주소법(Open Addressing)",
                "4": "제산법(Division)"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 32,
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
            "question_number": 33,
            "question_type": "multiple_choice",
            "question_description": "순서가 A, B, C, D로 정해진 입력 자료를 스택에 입력하였다가 출력할 때, 가능한 출력 순서의 결과가 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "A, B, C, D",
                "2": "D, A, B, C",
                "3": "A, B, D, C",
                "4": "B, C, D, A"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 34,
            "question_type": "multiple_choice",
            "question_description": "다음 중 클린 코드 작성원칙으로 거리가 먼 것은?",
            "additional_content": null,
            "choices": {
                "1": "누구든지 쉽게 이해하는 코드 작성",
                "2": "중복이 최대화된 코드 작성",
                "3": "다른 모듈에 미치는 영향 최소화",
                "4": "단순, 명료한 코드 작성"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 35,
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
            "question_number": 36,
            "question_type": "multiple_choice",
            "question_description": "알파, 베타 테스트와 가장 밀접한 연관이 있는 테스트 단계는?",
            "additional_content": null,
            "choices": {
                "1": "단위 테스트",
                "2": "인수 테스트",
                "3": "통합 테스트",
                "4": "시스템 테스트"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 37,
            "question_type": "multiple_choice",
            "question_description": "테스트 드라이버(Test Driver)에 대한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "시험 대상 모듈을 호출하는 간이 소프트웨어이다",
                "2": "필요에 따라 매개 변수를 전달하고 모듈을 수행한 후의 결과를 보여줄 수 있다",
                "3": "상향식 통합 테스트에서 사용된다",
                "4": "테스트 대상 모듈이 호출하는 하위 모듈의 역할을 한다"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 38,
            "question_type": "multiple_choice",
            "question_description": "소프트웨어 패키징에 대한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "패키징은 개발자 중심으로 진행한다",
                "2": "신규 및 변경 개발소스를 식별하고, 이를 모듈화하여 상용제품으로 패키징한다",
                "3": "고객의 편의성을 위해 매뉴얼 및 버전관리를 지속적으로 한다",
                "4": "범용 환경에서 사용이 가능하도록 일반적인 배포 형태로 패키징이 진행된다"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 39,
            "question_type": "multiple_choice",
            "question_description": "연결 리스트(Linked List)에 대한 설명으로 거리가 먼 것은?",
            "additional_content": null,
            "choices": {
                "1": "노드의 삽입이나 삭제가 쉽다",
                "2": "노드들이 포인터로 연결되어 검색이 빠르다",
                "3": "연결을 해주는 포인터(Pointer)를 위한 추가 공간이 필요하다",
                "4": "연결 리스트 중에서 중간 노드 연결이 끊어지면 그 다음 노드를 찾기 힘들다"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 40,
            "question_type": "multiple_choice",
            "question_description": "알고리즘 시간 복잡도 O(1)이 의미하는 것은?",
            "additional_content": null,
            "choices": {
                "1": "컴퓨터 처리가 불가",
                "2": "알고리즘 입력 데이터 수가 한개",
                "3": "알고리즘 수행시간이 입력 데이터 수와 관계 없이 일정",
                "4": "알고리즘 길이가 입력 데이터보다 작음"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 41,
            "question_type": "multiple_choice",
            "question_description": "데이터베이스 무결성에 관한 설명으로 옳은 것은?",
            "additional_content": null,
            "choices": {
                "1": "개체 무결성 규정은 한 릴레이션의 기본키를 구성하는 어떠한 속성값도 널(NULL) 값이나 중복값을 가질 수 없음을 규정하는 것이다",
                "2": "참조 무결성 규정은 속성 값들이 사용자가 정의한 제약 조건에 만족해야 한다는 규정이다",
                "3": "도메인 무결성 규정은 외래키 값은 Null이거나 참조 릴레이션의 기본키 값과 동일해야 한다는 규정이다",
                "4": "사용자 정의 무결성 규정은 주어진 튜플의 값이 그 튜플이 정의된 도메인에 속한 값이어야 한다는 것을 규정하는 것이다"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 42,
            "question_type": "multiple_choice",
            "question_description": "트랜잭션의 상태를 보여주는 다음 그림을 보고 각 상태에 대한 설명으로 옳지 않은 것은?",
            "additional_content": "**트랜잭션 상태 다이어그램:**\n- 시작 → 활동\n- 활동 → 부분 완료, 실패\n- 부분 완료 → 완료, 실패\n- 실패 → 철회\n- 완료, 철회 (종료 상태)",
            "choices": {
                "1": "활동 상태는 트랜잭션이 수행되기 시작하여 현재 실행 중인 상태를 의미한다",
                "2": "완료는 트랜잭션이 성공적으로 종료되어 Commit 연산까지 수행한 상태를 의미한다",
                "3": "부분 완료는 트랜잭션의 일부 연산만이 완료되어 Commit된 상태를 의미한다",
                "4": "철회는 트랜잭션이 수행하는 데 실패하여 Rollback 연산까지 수행한 상태를 의미한다"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 43,
            "question_type": "multiple_choice",
            "question_description": "무결성을 보장하기 위해 트랜잭션이 가져야 할 특성에 대한 설명으로 옳지 않은 것은?",
            "additional_content": null,
            "choices": {
                "1": "트랜잭션 내의 모든 명령은 반드시 완벽히 수행되어야 하며, 모두가 완벽히 수행되지 않고 어느 하나라도 오류가 발생하면 트랜잭션 전부가 취소되어야 한다",
                "2": "트랜잭션의 수행과 관계 없이 데이터베이스가 가지고 있는 고정 요소는 일관되어야 한다",
                "3": "둘 이상의 트랜잭션이 동시에 병행 실행되는 경우 어느 하나의 트랜잭션 실행 중에 다른 트랜잭션의 연산이 끼어들 수 없다",
                "4": "Commit과 Rollback 명령어에 의해 보장받는 트랜잭션의 특성은 일관성이다"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 44,
            "question_type": "multiple_choice",
            "question_description": "분산 데이터베이스의 특징에 대한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "로컬 서버의 고유 데이터에 대한 연산은 중앙 서버의 제어 없이 자유롭게 수행할 수 있다",
                "2": "새로운 로컬 서버나 장비의 추가가 용이하다",
                "3": "위치 투명성, 중복 투명성, 동시성 투명성, 장애 투명성을 목표로 한다",
                "4": "데이터베이스 설계와 소프트웨어 개발이 쉽고, 전체 시스템의 성능이 향상된다"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 45,
            "question_type": "multiple_choice",
            "question_description": "분할 방법 중 지정된 컬럼의 값을 기준으로 '월별', '분기별'과 같이 범위를 지정하여 분할하는 방법은?",
            "additional_content": null,
            "choices": {
                "1": "범위 분할(Range Partitioning)",
                "2": "해시 분할(Hash Partitioning)",
                "3": "복합 분할(Composite Partitioning)",
                "4": "리스트 분할(List Partitioning)"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 46,
            "question_type": "multiple_choice",
            "question_description": "관계형, 계층형, 네트워크형 등 다양한 데이터베이스의 종류를 구분하는 기준은?",
            "additional_content": null,
            "choices": {
                "1": "객체(Object)",
                "2": "관계(Relationship)",
                "3": "속성(Attribute)",
                "4": "제약조건(Constraint)"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 47,
            "question_type": "multiple_choice",
            "question_description": "다음 SQL 문의 실행 결과에 대한 설명으로 옳은 것은?",
            "additional_content": "**SQL 문:**\n```sql\nALTER TABLE 학생 DROP 학년 CASCADE;\n```",
            "choices": {
                "1": "학년 테이블에서 학년 속성을 제거하고, 학생 속성을 참조하는 다른 테이블의 속성도 함께 제거한다",
                "2": "학년 테이블에서 학생 속성을 제거하되, 학생 속성을 참조하는 다른 테이블의 속성이 있으면 제거를 중단한다",
                "3": "학생 테이블에서 학년 속성을 제거하고, 학년 속성을 참조하는 다른 테이블의 속성도 함께 제거한다",
                "4": "학생 테이블에서 학년 속성을 제거하되, 학년 속성을 참조하는 다른 테이블의 속성이 있으면 제거를 중단한다"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 48,
            "question_type": "multiple_choice",
            "question_description": "물리적 데이터베이스 설계의 전 단계로 데이터 모델링이라고도 불리는 데이터베이스 설계 단계는?",
            "additional_content": null,
            "choices": {
                "1": "개념적 데이터베이스 설계",
                "2": "논리적 데이터베이스 설계",
                "3": "정보 모델링",
                "4": "데이터베이스 구현"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 49,
            "question_type": "multiple_choice",
            "question_description": "정규화에 대한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "정규화 형태에는 1NF, 2NF, 3NF, BCNF, 4NF 등이 있다",
                "2": "릴레이션의 모든 도메인이 원자값으로만 구성된 정규화 형태는 1NF이다",
                "3": "1NF가 2NF가 되려면 모든 비주키 속성이 기본키에 완전 함수적 종속되어야 한다",
                "4": "모든 결정자가 후보키인 정규화 형태는 3NF이다"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 50,
            "question_type": "multiple_choice",
            "question_description": "개체-관계(E-R) 모델에 대한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "특정 DBMS를 고려하지 않고 작성된다",
                "2": "개체는 마름모로, 속성은 사각형으로 표현한다",
                "3": "개념적 데이터베이스 단계에서 작성된다",
                "4": "E-R 다이어그램이 E-R 모델의 기본 아이디어를 가장 잘 시각적으로 표현한다"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 51,
            "question_type": "multiple_choice",
            "question_description": "관계형 데이터베이스의 구성 요소에 대한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "속성을 구성하는 값들은 동일한 값을 가질 수 있다",
                "2": "릴레이션에 포함된 모든 튜플은 서로 다르다",
                "3": "릴레이션은 같은 이름의 속성을 가질 수 있다",
                "4": "릴레이션을 구성하는 속성들 간에는 순서가 없다"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 52,
            "question_type": "multiple_choice",
            "question_description": "SQL 명령어를 DCL, DML, DDL로 분류할 때 성격이 다른 것은?",
            "additional_content": null,
            "choices": {
                "1": "CREATE",
                "2": "SELECT",
                "3": "ALTER",
                "4": "DROP"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 53,
            "question_type": "multiple_choice",
            "question_description": "키는 개체 집합에서 개체를 고유하게 식별할 수 있는 속성이다. 데이터베이스에서 사용되는 키의 종류에 대한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "후보키는 개체를 고유하게 식별할 수 있는 속성이다",
                "2": "슈퍼키는 하나 이상의 속성으로 구성된 키이다",
                "3": "외래키는 다른 테이블에서 기본키로 사용되는 속성이다",
                "4": "대체키는 슈퍼키 중에서 기본키를 제외한 나머지 키를 말한다"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 54,
            "question_type": "multiple_choice",
            "question_description": "SQL의 TRUNCATE 명령어에 대한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "테이블의 모든 데이터를 삭제하는 것으로 DELETE와 유사하다",
                "2": "DROP과 달리 테이블 스키마는 제거되지 않고 유지된다",
                "3": "DELETE보다 빠르게 데이터를 제거할 수 있다",
                "4": "DELETE와 마찬가지로 ROLLBACK 명령어로 삭제된 데이터를 복원할 수 있다"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 55,
            "question_type": "multiple_choice",
            "question_description": "데이터베이스 동시성 제어에 대한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "여러 사용자가 동시에 데이터베이스에 접근하여 데이터를 처리하기 위한 것이다",
                "2": "처리 결과의 정확성을 유지하기 위해 데이터의 잠금이나 해제 등의 제어가 필요하다",
                "3": "잠금 단위가 클수록 동시성 제어 기법이 더욱 복잡해진다",
                "4": "잠금 단위가 클수록 동시성 수준이 낮아진다"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 56,
            "question_type": "multiple_choice",
            "question_description": "시스템 카탈로그에 대한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "시스템 자체와 관련된 다양한 객체에 대한 정보를 담고 있는 시스템 데이터베이스이다",
                "2": "데이터 사전이라고도 한다",
                "3": "기본 테이블, 뷰, 인덱스, 패키지, 접근 권한 등의 정보를 저장한다",
                "4": "시스템을 위한 정보를 담고 있는 시스템 데이터베이스이므로 일반 사용자는 SQL로 그 내용을 검색할 수 없다"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 57,
            "question_type": "multiple_choice",
            "question_description": "트리거(Trigger)에 대한 설명으로 옳은 것은?",
            "additional_content": null,
            "choices": {
                "1": "시스템에서 발생한 사건을 의미한다",
                "2": "이벤트가 발생할 때마다 관련 연산을 자동으로 수행하는 절차적 SQL이다",
                "3": "특정 기능을 수행하는 트랜잭션 언어의 한 종류로, 호출을 통해 미리 저장된 SQL 연산을 실행한다",
                "4": "DBMS에 작성되고 삽입된 SQL을 효율적으로 실행하기 위한 최적 경로를 찾는 모듈이다"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 58,
            "question_type": "multiple_choice",
            "question_description": "관계 대수와 관계 해석에 대한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "관계 대수는 원래 수학의 술어 해석에 기반을 두고 있다",
                "2": "관계 대수로 표현된 식은 관계 해석으로도 표현할 수 있다",
                "3": "관계 해석은 관계 데이터에 대한 연산을 표현하는 방법이다",
                "4": "관계 해석은 원하는 정보가 무엇인지만 정의하는 비절차적 특성을 가진다"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 59,
            "question_type": "multiple_choice",
            "question_description": "정보시스템과 관련한 다음 설명에 해당하는 것은?\n• 각 시스템 간에 공유 디스크를 중심으로 클러스터링으로 엮어 다수의 시스템을 동시에 연결할 수 있다.\n• 조직, 기업의 기간 업무 서버 안정성을 높이기 위해 사용될 수 있다.\n• 여러 가지 방식으로 구현되며 2개의 서버를 연결하는 것으로 2개의 시스템이 각각 업무를 수행하도록 구현하는 방식이 널리 사용된다.",
            "additional_content": null,
            "choices": {
                "1": "고가용성 솔루션(HACMP)",
                "2": "점대점 연결 방식(Point-to-Point Mode)",
                "3": "스틱스넷(Stuxnet)",
                "4": "루팅(Rooting)"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 60,
            "question_type": "multiple_choice",
            "question_description": "데이터베이스에 영향을 주는 생성, 읽기, 갱신, 삭제 연산으로 프로세스와 테이블 간에 매트릭스를 만들어서 트랜잭션을 분석하는 것은?",
            "additional_content": null,
            "choices": {
                "1": "CASE 분석",
                "2": "일치 분석",
                "3": "CRUD 분석",
                "4": "연관성 분석"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 61,
            "question_type": "multiple_choice",
            "question_description": "OSI 7계층 중 다음 설명에 해당하는 계층은?\n• 두 응용 프로세스 간의 통신에 대한 제어 구조를 제공한다.\n• 연결의 생성, 관리, 종료를 위해 토큰을 사용한다.",
            "additional_content": null,
            "choices": {
                "1": "데이터링크 계층",
                "2": "네트워크 계층",
                "3": "세션 계층",
                "4": "표현 계층"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 62,
            "question_type": "multiple_choice",
            "question_description": "다음 C언어 프로그램의 결과로 옳은 것은?",
            "additional_content": "**C 코드:**\n```c\n#include <stdio.h>\nmain() {\n    int a = 3, b = 4, c = 5;\n    int r1, r2, r3;\n    r1 = a < 4 && b <= 4;\n    r2 = a > 3 || b <= 5;\n    r3 = !c;\n    printf(\"%d\", r1 - r2 + r3);\n}\n```",
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
            "question_number": 63,
            "question_type": "multiple_choice",
            "question_description": "다음 C언어 프로그램 실행 후, 'c'를 입력하였을 때 출력 결과는?",
            "additional_content": "**C 코드:**\n```c\n#include <stdio.h>\nmain() {\n    char ch;\n    scanf(\"%c\", &ch);\n    switch (ch) {\n        case 'a':\n            printf(\"one \");\n        case 'b':\n            printf(\"two \");\n        case 'c':\n            printf(\"three \");\n            break;\n        case 'd':\n            printf(\"four \");\n            break;\n    }\n}\n```",
            "choices": {
                "1": "one",
                "2": "one two",
                "3": "three",
                "4": "one two three four"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 64,
            "question_type": "multiple_choice",
            "question_description": "다음 C언어 프로그램에서 밑줄 친 부분과 동일한 의미를 가지는 것은 어떤것인가?",
            "additional_content": "**C 코드:**\n```c\n#include <stdio.h>\nmain() {\n    int a, b;\n    for (a = 0; a < 2; a++)\n        for (b = 0; b < 2; b++)\n            printf(\"%d\", !a && !b); // 밑줄 친 부분\n}\n```",
            "choices": {
                "1": "!a || !b",
                "2": "!(a || b)",
                "3": "a && b",
                "4": "a || b"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 65,
            "question_type": "multiple_choice",
            "question_description": "다음 파이썬 코드에서 '53t44'를 입력했을 때 출력 결과는?",
            "additional_content": "**Python 코드:**\n```python\na, b = map(int, input().split(\"t\"));\nprint(a, b)\n```",
            "choices": {
                "1": "53 t 44",
                "2": "53t44",
                "3": "53 44",
                "4": "53, 44"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 66,
            "question_type": "multiple_choice",
            "question_description": "다음 중 HRN에 대한 설명으로 옳지 않은 것은?",
            "additional_content": null,
            "choices": {
                "1": "대기시간과 서비스시간을 이용하는 방법이다",
                "2": "대기 시간이 긴 프로세스일 경우 우선순위가 높다",
                "3": "우선순위 계산식 값이 낮을수록 우선순위가 높다",
                "4": "SJF 기법을 보완하기 위한 스케쥴링 방법이다"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 67,
            "question_type": "multiple_choice",
            "question_description": "C언어에서 malloc() 함수에 대한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "원하는 시점에 원하는 만큼 메모리를 동적으로 할당한다",
                "2": "사용자가 입력한 bit만큼 메모리를 할당한다",
                "3": "free 명령어로 할당된 메모리를 해제한다",
                "4": "메모리 할당이 불가능할 경우 NULL이 반환된다"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 68,
            "question_type": "multiple_choice",
            "question_description": "다음 중 프로세스에 대한 설명 중 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "프로세서가 할당되는 실체로, 디스패치가 가능한 단위이다",
                "2": "프로세스는 비동기적 행위를 일으키는 주체이다",
                "3": "프로세스는 스레드 내의 작업단위를 의미하며, 경량 스레드라고도 불린다",
                "4": "PCB를 가지며 PCB에는 프로세스의 현재상태, 고유식별자를 가지고 있다"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 69,
            "question_type": "multiple_choice",
            "question_description": "3개의 보관구조를 가지는 주기억장치가 있으며, 다음의 순서로 페이지 참조가 발생할 때, FIFO 페이지 교체 알고리즘을 사용할 경우 마지막 페이지 값으로 옳은 것은?",
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
            "question_description": "다음 설명에 해당하는 내용은 무엇인가?\n프로세스 처리 도중, 참조할 페이지가 주기억장치에 없어 프로세스 처리시간보다 페이지 교체에 소요되는 시간이 더 많아지는 현상",
            "additional_content": null,
            "choices": {
                "1": "스레드(Thread)",
                "2": "스래싱(Thrashing)",
                "3": "페이지부재(Page Fault)",
                "4": "워킹셋(Working Set)"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 71,
            "question_type": "multiple_choice",
            "question_description": "IP 버전에 대한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "IPv4는 옥텟으로 구성되며, 32비트 주소 체계이다",
                "2": "IPv4는 A, B, C, D, E 클래스로 구분되며, 네트워크 부분의 길이에 따라 결정된다",
                "3": "IPv6는 콜론으로 구분되며, IPv4보다 데이터 전송 속도가 빠르다",
                "4": "IPv6는 128비트 주소 체계로 약 43억 개의 주소를 가질 수 있다"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 72,
            "question_type": "multiple_choice",
            "question_description": "JAVA에서 더 이상 사용되지 않는 객체들을 Heap에서 제거하는 모듈로, 참조가 끊어지거나 변수가 사라져서 사용할 수 없게 된 객체들을 제거하는 것은?",
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
            "question_number": 73,
            "question_type": "multiple_choice",
            "question_description": "UNIX에서 새로운 프로세스를 생성하는 명령어는?",
            "additional_content": null,
            "choices": {
                "1": "ls",
                "2": "cat",
                "3": "fork",
                "4": "chmod"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 74,
            "question_type": "multiple_choice",
            "question_description": "다음 중 데드락(Deadlock)의 발생 조건이 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "상호 배제(Mutual exclusion)",
                "2": "점유 대기(Hold and wait)",
                "3": "비선점(Non-preemption)",
                "4": "선형 대기(Linear wait)"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 75,
            "question_type": "multiple_choice",
            "question_description": "IEEE 802.3 LAN에서 사용되는 매체 접근 제어(MAC) 방식은?",
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
            "question_number": 76,
            "question_type": "multiple_choice",
            "question_description": "다음 중 프로세스 상태가 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "Ready",
                "2": "Running",
                "3": "Request",
                "4": "Exit"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 77,
            "question_type": "multiple_choice",
            "question_description": "TCP/IP 프로토콜 중 논리적 주소를 물리적 주소로 변환하는 프로토콜은?",
            "additional_content": null,
            "choices": {
                "1": "TCP",
                "2": "ARP",
                "3": "FTP",
                "4": "IP"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 78,
            "question_type": "multiple_choice",
            "question_description": "OSI 7계층 모델에서 네트워크 계층에 대한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "출발지에서 목적지까지 패킷을 전달하는 역할을 담당한다",
                "2": "노드 간 프레임 전송을 담당한다",
                "3": "패킷에 논리적 주소를 추가한다",
                "4": "라우팅과 스위칭 기능을 수행한다"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 79,
            "question_type": "multiple_choice",
            "question_description": "프레임워크(Framework)에 대한 설명으로 옳은 것은?",
            "additional_content": null,
            "choices": {
                "1": "재사용을 위한 기본 구조를 제공하는 역할을 한다",
                "2": "확장성이 제한적이다",
                "3": "소프트웨어 아키텍처와 유사한 개념이다",
                "4": "모듈화가 불가능하다"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 80,
            "question_type": "multiple_choice",
            "question_description": "C언어 라이브러리 stdlib.h에 대한 설명으로 옳은 것은?",
            "additional_content": null,
            "choices": {
                "1": "문자 변환 함수(문자열을 숫자로, 숫자를 문자열로 변환)를 포함한다",
                "2": "strlen()과 같은 문자열 처리 함수를 포함한다",
                "3": "표준 입출력 라이브러리이다",
                "4": "수학 함수들을 포함한다"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 81,
            "question_type": "multiple_choice",
            "question_description": "입력 데이터 검증 및 표현과 관련한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "SQL Injection은 임의로 작성한 SQL 구문을 애플리케이션에 삽입하는 공격 방식이다",
                "2": "Cross-site Scripting은 웹 애플리케이션과 데이터베이스가 연동되는 부분에서 주로 발생한다",
                "3": "Resource Injection은 악성 스크립트 파일을 업로드하는 공격 방식이다",
                "4": "OS Command Injection은 운영체제 명령어를 삽입하는 공격 방식이다"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 82,
            "question_type": "multiple_choice",
            "question_description": "다른 컴퓨터의 취약점을 이용하거나 이메일을 통해 전파되며, 스스로 복제되는 악성 코드의 종류는?",
            "additional_content": null,
            "choices": {
                "1": "웜(Worm)",
                "2": "로그웨어(Rogue Ware)",
                "3": "애드웨어(Adware)",
                "4": "리플렉션 공격(Reflection Attack)"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 83,
            "question_type": "multiple_choice",
            "question_description": "정보보안의 요소 중 무결성(Integrity)에 대한 설명으로 옳은 것은?",
            "additional_content": null,
            "choices": {
                "1": "인가된 사용자만 접근할 수 있도록 하는 것이다",
                "2": "사용자 인증을 통해 신원을 확인하는 것이다",
                "3": "시스템이 항상 사용 가능한 상태를 유지하는 것이다",
                "4": "인가된 사용자에 의해서만 정보가 수정될 수 있도록 하는 것이다"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 84,
            "question_type": "multiple_choice",
            "question_description": "세션 하이재킹 탐지 방법이 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "FTP SYN SEGMENT 탐지",
                "2": "비동기 상태 탐지",
                "3": "ACK STORM 탐지",
                "4": "패킷 손실 증가 및 재전송 탐지"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 85,
            "question_type": "multiple_choice",
            "question_description": "정보보안의 3요소에 해당하지 않는 것은?",
            "additional_content": null,
            "choices": {
                "1": "기밀성(Confidentiality)",
                "2": "무결성(Integrity)",
                "3": "가용성(Availability)",
                "4": "휘발성(Volatility)"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 86,
            "question_type": "multiple_choice",
            "question_description": "LOC(Lines of Code) 기법을 이용한 문제에서 총 라인 수가 36,000라인이고, 프로그래머가 6명이며, 평균 월 생산성이 300라인/월일 때 개발 기간은?",
            "additional_content": null,
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
            "question_number": 87,
            "question_type": "multiple_choice",
            "question_description": "COCOMO 모델을 이용한 비용 추정에 대한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "Boehm에 의해 제안되었다",
                "2": "소프트웨어 유형에 따라 비용이 달라진다",
                "3": "일반적인 비용 추정 유형으로는 Organic, Embedded, Semi-Detached Mode가 있다",
                "4": "UFP(Unadjusted Function Point)를 계산한다"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 88,
            "question_type": "multiple_choice",
            "question_description": "Wi-Fi에서 제정한 무선 LAN 인증 및 암호화 표준은?",
            "additional_content": null,
            "choices": {
                "1": "WCDMA",
                "2": "WPA",
                "3": "SSL",
                "4": "SHA"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 89,
            "question_type": "multiple_choice",
            "question_description": "다음 설명에 해당하는 암호화 알고리즘은?\n• DES의 보안 문제를 해결하기 위해 개발되었다.\n• NIST에서 개발한 개인키 암호화 알고리즘이다.",
            "additional_content": null,
            "choices": {
                "1": "ARIA",
                "2": "AES",
                "3": "DSA",
                "4": "SEED"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 90,
            "question_type": "multiple_choice",
            "question_description": "침입탐지 시스템(IDS: Intrusion Detection System)과 관련한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "이상 탐지 기법(Anomaly Detection)은 Signature Base나 Knowledge Base라고도 불리며 이미 발견되고 정립된 공격 패턴을 입력해두었다가 탐지 및 차단한다",
                "2": "HIDS(Host-Based Intrusion Detection)는 운영체제에 설정된 사용자 계정에 따라 어떤 사용자가 어떤 접근을 시도하고 어떤 작업을 했는지에 대한 기록을 남기고 추적한다",
                "3": "NIDS(Network-Based Intrusion Detection System)로는 대표적으로 Snort가 있다",
                "4": "외부 인터넷에 서비스를 제공하는 서버가 위치하는 네트워크인 DMZ(Demilitarized Zone)에는 IDS가 설치될 수 있다"
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
                "1": "브라우저는 전송되는 신호가 전송 선로의 특성 및 외부 충격 등의 요인으로 인해 원래의 형태와 다르게 왜곡되거나 약해질 경우 원래의 신호 형태로 재생하여 다시 전송하는 역할을 수행한다",
                "2": "브리지는 LAN과 LAN을 연결하거나 LAN 안에서의 컴퓨터 그룹을 연결하는 기능을 수행하며, 데이터 링크 계층 중 MAC 계층에서 사용된다",
                "3": "스위치는 LAN과 LAN을 연결하여 훨씬 더 큰 LAN을 만드는 장치로, OSI 7계층의 2계층에서 사용된다",
                "4": "라우터는 LAN과 LAN의 연결 기능에 데이터 전송의 최적 경로를 선택할 수 있는 기능이 추가된 것으로, 서로 다른 LAN이나 LAN과 WAN의 연결도 수행하고, OSI 7계층의 네트워크 계층에서 동작한다"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 92,
            "question_type": "multiple_choice",
            "question_description": "SQL Injection 공격과 관련한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "SQL Injection은 임의로 작성한 SQL 구문을 애플리케이션에 삽입하는 공격 방식이다",
                "2": "SQL Injection 취약점이 발생하는 곳은 주로 웹 애플리케이션과 데이터베이스가 연동되는 부분이다",
                "3": "DBMS의 종류와 관계없이 SQL Injection 공격 기법은 모두 동일하다",
                "4": "로그인과 같이 웹에서 사용자의 입력 값을 받아 데이터베이스 SQL문으로 데이터를 요청하는 경우 SQL Injection을 수행할 수 있다"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 93,
            "question_type": "multiple_choice",
            "question_description": "브리지와 구내 정보 통신망(LAN)으로 구성된 통신망에서 루프(폐회로)를 형성하지 않으면서 연결을 설정하는 알고리즘은?",
            "additional_content": null,
            "choices": {
                "1": "Spanning Tree Algorithm",
                "2": "Diffie-Hellman Algorithm",
                "3": "Hash Algorithm",
                "4": "Digital Signature Algorithm"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 94,
            "question_type": "multiple_choice",
            "question_description": "다음 내용이 설명하는 것은?\n• 블록체인(Blockchain) 개발환경을 클라우드로 서비스하는 개념\n• 블록체인 네트워크에 노드의 추가 및 제거가 용이\n• 블록체인의 기본 인프라를 추상화하여 블록체인 응용프로그램을 만들 수 있는 클라우드 컴퓨팅 플랫폼",
            "additional_content": null,
            "choices": {
                "1": "BaaS(Blockchain as a Service)",
                "2": "IaaS(Infrastructure as a Service)",
                "3": "PaaS(Platform as a Service)",
                "4": "SaaS(Software as a Service)"
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
            "question_description": "다음 암호 알고리즘 중 성격 다른 하나는?",
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
            "question_number": 97,
            "question_type": "multiple_choice",
            "question_description": "다음 내용이 설명하는 것은?\n• 네트워크상에 광채널 스위치의 이점인 고속 전송과 장거리 연결 및 멀티 프로토콜 기능을 활용\n• 각기 다른 운영체제를 가진 여러 기종들이 네트워크상에서 동일 저장장치의 데이터를 공유하게 함으로써, 여러 개의 저장장치나 백업 장비를 단일화시킨 시스템",
            "additional_content": null,
            "choices": {
                "1": "SAN",
                "2": "MBR",
                "3": "NAC",
                "4": "NIC"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 98,
            "question_type": "multiple_choice",
            "question_description": "기존 무선 랜의 한계 극복을 위해 등장하였으며, 대규모 디바이스의 네트워크 생성에 최적화되어 차세대 이동통신, 홈네트워킹, 공공 안전 등의 특수목적에 사용되는 새로운 방식의 네트워크 기술을 의미하는 것은?",
            "additional_content": null,
            "choices": {
                "1": "Software Defined Perimeter",
                "2": "Virtual Private Network",
                "3": "Local Area Network",
                "4": "Mesh Network"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 99,
            "question_type": "multiple_choice",
            "question_description": "CPM(Critical Path Method)에 대한 설명으로 옳지 않은 것은?",
            "additional_content": null,
            "choices": {
                "1": "프로젝트 내에서 각 작업이 수행되는 시간과 각 작업 사이의 관계를 파악할 수 있다",
                "2": "작업 일정을 한눈에 볼 수 있도록 해주며 막대 그래프의 형태로 표현한다",
                "3": "효과적인 프로젝트의 통제를 가능하게 해 준다",
                "4": "경영층의 과학적인 의사 결정을 지원한다"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 100,
            "question_type": "multiple_choice",
            "question_description": "클라우드 기반 HSM(Cloud-based Hardware Security Module)에 대한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "클라우드(데이터센터) 기반 암호화 키 생성, 처리, 저장 등을 하는 보안 기기이다",
                "2": "국내에서는 공인인증제의 폐지와 전자서명법 개정을 추진하면서 클라우드 HSM 용어가 자주 등장하였다",
                "3": "클라우드에 인증서를 저장하므로 기존 HSM 기기나 휴대폰에 인증서를 저장해 다닐 필요가 없다",
                "4": "하드웨어가 아닌 소프트웨어적으로만 구현되기 때문에 소프트웨어식 암호 기술에 내재된 보안 취약점을 해결할 수 없다는 것이 주요 단점이다"
            },
            "score": 1
        }
    ]
} 
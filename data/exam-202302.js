const EXAM_DATA_202302 = {
    "year": "2023",
    "round": 2,
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
        }
    ],
    "questions": [
        {
            "category_id": 1,
            "question_number": 1,
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
            "question_number": 2,
            "question_type": "multiple_choice",
            "question_description": "메시지 지향 미들웨어(Message-Oriented Middleware, MOM)에 대한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "느리고 안정적인 응답보다는 즉각적인 응답이 필요한 온라인 업무에 적합하다",
                "2": "독립적인 애플리케이션을 하나의 통합된 시스템으로 묶기 위한 역할을 한다",
                "3": "송신측과 수신측의 연결 시 메시지 큐를 활용하는 방법이 있다",
                "4": "상이한 애플리케이션 간 통신을 비동기 방식으로 지원한다"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 3,
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
            "question_number": 4,
            "question_type": "multiple_choice",
            "question_description": "GoF(Gangs of Four) 디자인 패턴 분류에 해당하지 않는 것은?",
            "additional_content": null,
            "choices": {
                "1": "생성 패턴",
                "2": "객체 패턴",
                "3": "행위 패턴",
                "4": "구조 패턴"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 5,
            "question_type": "multiple_choice",
            "question_description": "다음 중 가장 결합도가 강한 것은?",
            "additional_content": null,
            "choices": {
                "1": "Date Coupling",
                "2": "Stamp Coupling",
                "3": "Common Coupling",
                "4": "Control Coupling"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 6,
            "question_type": "multiple_choice",
            "question_description": "아키텍처 설계 과정이 올바른 순서로 나열된 것은?",
            "additional_content": "가. 설계 목표 설정\n나. 시스템 타입 결정\n다. 스타일 적용 및 커스터마이즈\n라. 서브시스템의 기능, 인터페이스 동작 작성\n마. 아키텍처 설계 검토",
            "choices": {
                "1": "가 → 나 → 다 → 라 → 마",
                "2": "가 → 나 → 라 → 다 → 마",
                "3": "마 → 가 → 나 → 라 → 다",
                "4": "가 → 라 → 나 → 다 → 마"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 7,
            "question_type": "multiple_choice",
            "question_description": "소프트웨어 설계 시 구축된 플랫폼의 성능 특성 분석에 사용되는 측정 항목이 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "응답 시간(Response Time)",
                "2": "서버 튜닝(Server Tuning)",
                "3": "가용성(Availability)",
                "4": "사용률(Utilization)"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 8,
            "question_type": "multiple_choice",
            "question_description": "다음 내용이 설명하는 객체지향 설계 원칙은?",
            "additional_content": "클라이언트는 자신이 사용하지 않는 메소드와 의존관계를 맺으면 안 된다.\n클라이언트가 사용하지 않는 인터페이스 때문에 영향을 받아서는 안 된다.",
            "choices": {
                "1": "인터페이스 분리 원칙",
                "2": "단일 책임 원칙",
                "3": "개방 폐쇄의 원칙",
                "4": "리스코프 교체의 원칙"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 9,
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
            "question_number": 10,
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
            "question_number": 11,
            "question_type": "multiple_choice",
            "question_description": "HIPO(Hierarchy Input Process Output)에 대한 설명으로 옳지 않은 것은?",
            "additional_content": null,
            "choices": {
                "1": "상향식 소프트웨어 개발을 위한 문서화 도구이다",
                "2": "구조도, 개요 도표 집합, 상세 도표 집합으로 구성된다",
                "3": "기능과 자료의 의존 관계를 통해서 표현할 수 있다",
                "4": "보기 쉽고 이해하기 쉽다"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 12,
            "question_type": "multiple_choice",
            "question_description": "데이터 흐름도(DFD)의 구성 요소에 포함되지 않는 것은?",
            "additional_content": null,
            "choices": {
                "1": "Data Flow",
                "2": "Data Dictionary",
                "3": "Process",
                "4": "Data Store"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 13,
            "question_type": "multiple_choice",
            "question_description": "객체에게 어떤 행위를 하도록 지시하는 명령은?",
            "additional_content": null,
            "choices": {
                "1": "Class",
                "2": "Instance",
                "3": "Object",
                "4": "Message"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 14,
            "question_type": "multiple_choice",
            "question_description": "GoF(Gangs of Four) 디자인 패턴 중 생성 패턴으로 옳은 것은?",
            "additional_content": null,
            "choices": {
                "1": "Singleton Pattern",
                "2": "Adapter Pattern",
                "3": "Decorator Pattern",
                "4": "State Pattern"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 15,
            "question_type": "multiple_choice",
            "question_description": "럼바우(Rumbaugh) 분석 기법에서 정보 모델링이라고도 하며, 시스템에서 요구되는 객체를 찾아내어 속성과 연산 식별 및 객체들 간의 관계를 규정하여 다이어그램을 표시하는 모델링은?",
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
            "question_number": 16,
            "question_type": "multiple_choice",
            "question_description": "다음 결합도의 종류에 대한 설명 중 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "자료 결합도 : 모듈 간의 인터페이스가 자료 요소로만 구성될 때의 결합도",
                "2": "내용 결합도 : 한 모듈이 다른 모듈과 제어 신호를 이용하여 통신하고, 공유되는 공통 데이터 영역을 사용할 때의 결합도",
                "3": "스탬프 결합도: 모듈 간의 인터페이스로, 배열의 자료 구조가 전달될 때의 결합도",
                "4": "외부 결합도 : 어떤 모듈에서 선언한 데이터를 다른 모듈에서 참조할 때의 결합도"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 17,
            "question_type": "multiple_choice",
            "question_description": "CASE(Computer Aided Software Engineering)에 대한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "소프트웨어 모듈의 재사용성이 향상된다",
                "2": "자동화된 기법을 통해 소프트웨어 품질이 향상된다",
                "3": "소프트웨어 사용자들에게 사용 방법을 신속히 숙지시키기 위해 사용된다",
                "4": "소프트웨어 유지보수를 간편하게 수행할 수 있다"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 18,
            "question_type": "multiple_choice",
            "question_description": "파이프 필터 형태의 소프트웨어 아키텍처에 대한 설명으로 옳은 것은?",
            "additional_content": null,
            "choices": {
                "1": "노드와 간선으로 구성된다",
                "2": "서브시스템이 입력 데이터를 받아 처리하고 결과를 다음 서브 시스템으로 넘겨주는 과정을 반복한다",
                "3": "계층 모델이라고도 한다",
                "4": "3개의 서브시스템(모델, 뷰, 제어)으로 구성되어 있다"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 19,
            "question_type": "multiple_choice",
            "question_description": "공릉 모들에 대한 명세 기법 중 해당 기능에 대해 일관되게 이해되고 한 가지로 해석될 수 있도록 작성하는 원칙은?",
            "additional_content": null,
            "choices": {
                "1": "상호작용성",
                "2": "명확성",
                "3": "독립성",
                "4": "내용성"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 20,
            "question_type": "multiple_choice",
            "question_description": "바람직한 소프트웨어 설계 지침이 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "적당한 모듈의 크기를 유지한다",
                "2": "모듈 간의 접속 관계를 분석하여 복잡도와 중복을 줄인다",
                "3": "모듈 간의 결합도는 강할수록 바람직하다",
                "4": "모듈 간의 효과적인 제어를 위해 설계에서 계층적 자료 조직이 제시되어야 한다"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 21,
            "question_type": "multiple_choice",
            "question_description": "구현 단계에서의 작업 절차를 순서에 맞게 나열한 것은?",
            "additional_content": "㉮ 코딩한다.\n㉯ 코딩작업을 계획한다.\n㉰ 코드를 테스트한다.\n㉱ 컴파일한다.",
            "choices": {
                "1": "㉮ → ㉯ → ㉰ → ㉱",
                "2": "㉯ → ㉱ → ㉮ → ㉰",
                "3": "㉯ → ㉮ → ㉱ → ㉰",
                "4": "㉯ → ㉮ → ㉰ → ㉱"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 22,
            "question_type": "multiple_choice",
            "question_description": "소프트웨어 품질 목표 중 쉽게 배우고 사용할 수 있는 정도를 나타내는 것은?",
            "additional_content": null,
            "choices": {
                "1": "Correctness",
                "2": "Reliability",
                "3": "Usability",
                "4": "Integrity"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 23,
            "question_type": "multiple_choice",
            "question_description": "객체지향 개념을 활용한 소프트웨어 구현과 관련한 설명 중 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "객체(Object)란 필요한 자료 구조와 수행되는 함수들을 가진 하나의 독립된 존재이다",
                "2": "JAVA에서 정보은닉(Information Hiding)을 표기할 때 private의 의미는 '공개'이다",
                "3": "상속(Inheritance)은 개별 클래스를 상속 관계로 묶음으로써 클래스 간의 체계화된 전체 구조를 파악하기 쉽다는 장점이 있다",
                "4": "같은 클래스에 속하는 개개의 객체이자 하나의 클래스에서 생성된 객체를 인스턴스(Instance)라고 한다"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 24,
            "question_type": "multiple_choice",
            "question_description": "다음 설명에 부합하는 용어로 옳은 것은?",
            "additional_content": "• 소프트웨어 구조를 이루며, 다른 것들과 구별될 수 있는 독립적인 기능을 갖는 단위이다.\n• 하나 또는 몇 개의 논리적인 기능을 수행하기 위한 명령 어들의 집합이라고도 할 수 있다.\n• 서로 모여 하나의 완전한 프로그램으로 만들어질 수 있다.",
            "choices": {
                "1": "통합 프로그램",
                "2": "저장소",
                "3": "모듈",
                "4": "데이터"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 25,
            "question_type": "multiple_choice",
            "question_description": "스택에 대한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "입출력이 한쪽 끝으로만 제한된 리스트이다",
                "2": "Head(front)와 Tail(rear)의 2개 포인터를 갖고 있다",
                "3": "LIFO 구조이다",
                "4": "더 이상 삭제할 데이터가 없는 상태에서 데이터를 삭제하면 언더플로(Underflow)가 발생한다"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 26,
            "question_type": "multiple_choice",
            "question_description": "다음 전위식(prefix)을 후위식(postfix)으로 옳게 표현한 것은?",
            "additional_content": "- / A + B C D E",
            "choices": {
                "1": "A B C + D / E -",
                "2": "A B * C D / E -",
                "3": "A B C + D / E -",
                "4": "A B C + * D / E -"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 27,
            "question_type": "multiple_choice",
            "question_description": "버블 정렬을 이용하여 다음 자료를 오름차순으로 정렬할 경우 PASS 1의 결과는?",
            "additional_content": "9, 6, 7, 3, 5",
            "choices": {
                "1": "6, 9, 7, 3, 5",
                "2": "3, 9, 6, 7, 5",
                "3": "3, 6, 7, 9, 5",
                "4": "6, 7, 3, 5, 9"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 28,
            "question_type": "multiple_choice",
            "question_description": "해싱 함수(Hashing Function)의 종류가 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "제곱법(Mid-Square)",
                "2": "숫자 분석법(Digit Analysis)",
                "3": "개방주소법(Open Addressing)",
                "4": "제산법(Division)"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 29,
            "question_type": "multiple_choice",
            "question_description": "소프트웨어 패키징 도구 활용 시 고려사항으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "반드시 내부 콘텐츠에 대한 암호화 및 보안을 고려한다",
                "2": "보안을 위하여 이기종 연동을 고려하지 않아도 된다",
                "3": "사용자 편의성을 위한 복잡성 및 비효율성 문제를 고려한다",
                "4": "제품 소프트웨어 종류에 적합한 암호화 알고리즘을 적용한다"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 30,
            "question_type": "multiple_choice",
            "question_description": "소프트웨어 설치 매뉴얼에 대한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "설치 과정을 단계별로 상세히 기술한다",
                "2": "설치 시 발생할 수 있는 문제점과 해결방법을 포함한다",
                "3": "사용자 교육을 위한 내용을 포함한다",
                "4": "소프트웨어의 기능과 특징을 설명한다"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 31,
            "question_type": "multiple_choice",
            "question_description": "제품 소프트웨어 구성 관리의 역할이 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "배포 버전 관리",
                "2": "소스 수정 제한",
                "3": "개발 비용 관리",
                "4": "동시 개발 가능"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 32,
            "question_type": "multiple_choice",
            "question_description": "동시 소스 수정을 방지하고 개발 결과를 병합하거나 변경 사항을 추적할 수 있는 소프트웨어 버전 관리 도구는?",
            "additional_content": null,
            "choices": {
                "1": "RCS",
                "2": "RTS",
                "3": "RPC",
                "4": "RVS"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 33,
            "question_type": "multiple_choice",
            "question_description": "블랙박스 테스트 기법과 거리가 먼 것은?",
            "additional_content": null,
            "choices": {
                "1": "Basis path testing",
                "2": "Equivalence partitioning",
                "3": "Boundary value analysis",
                "4": "Cause-effect graphing"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 34,
            "question_type": "multiple_choice",
            "question_description": "상향식 통합 테스트에서 하향식 통합 테스트를 위해 필요한 조건만 갖춘 임시 테스트 모듈은?",
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
            "question_description": "알고리즘에서 O(1) 시간 복잡도의 의미는?",
            "additional_content": null,
            "choices": {
                "1": "컴퓨터의 처리 능력",
                "2": "입력 데이터의 개수",
                "3": "일정한 실행 시간",
                "4": "알고리즘의 길이"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 36,
            "question_type": "multiple_choice",
            "question_description": "다음 제어 흐름 그래프에서 McCabe의 순환 복잡도는?",
            "additional_content": "a → b, a → c, b → d, c → d, d → a",
            "choices": {
                "1": "3",
                "2": "4",
                "3": "5",
                "4": "6"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 37,
            "question_type": "multiple_choice",
            "question_description": "클린 코드 작성 원칙에 대한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "중복을 최소화한다",
                "2": "다른 모듈에 미치는 영향을 최대화한다",
                "3": "가독성을 높인다",
                "4": "단순성을 유지한다"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 38,
            "question_type": "multiple_choice",
            "question_description": "인터페이스 보안을 위한 네트워크 영역에 해당하지 않는 것은?",
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
            "question_number": 39,
            "question_type": "multiple_choice",
            "question_description": "다음 그래프에서 정점 A부터 시작하여 깊이 우선 탐색(DFS)을 수행한 결과는?",
            "additional_content": "A-B, A-C, B-D, C-E, D-F, E-G",
            "choices": {
                "1": "A-B-D-F-C-E-G",
                "2": "A-C-E-G-B-D-F",
                "3": "A-B-C-D-E-F-G",
                "4": "A-D-B-E-C-F-G"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 40,
            "question_type": "multiple_choice",
            "question_description": "정보시스템 개발 단계에서 프로그래밍 언어 선택 시 고려할 사항으로 가장 거리가 먼 것은?",
            "additional_content": null,
            "choices": {
                "1": "개발 정보시스템의 특성",
                "2": "사용자의 요구사항",
                "3": "컴파일러의 가용성",
                "4": "컴파일러의 독창성"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 41,
            "question_type": "multiple_choice",
            "question_description": "단일 속성이 가질 수 있는 원자값들의 집합을 의미하는 것은?",
            "additional_content": null,
            "choices": {
                "1": "Domain",
                "2": "Tuple",
                "3": "Entity",
                "4": "Polymorphism"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 42,
            "question_type": "multiple_choice",
            "question_description": "관계(Relation)에 대한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "튜플은 서로 다른 값을 가진다",
                "2": "튜플의 순서는 중요하지 않다",
                "3": "속성의 이름은 유일해야 한다",
                "4": "속성값은 원자값이어야 한다"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 43,
            "question_type": "multiple_choice",
            "question_description": "다음 중 DML(Data Manipulation Language) 명령어만 포함된 것은?",
            "additional_content": "SELECT, INSERT, UPDATE, GRANT",
            "choices": {
                "1": "SELECT, INSERT, UPDATE",
                "2": "SELECT, INSERT, GRANT",
                "3": "INSERT, UPDATE, GRANT",
                "4": "SELECT, UPDATE, GRANT"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 44,
            "question_type": "multiple_choice",
            "question_description": "관계 대수식 R × S = {rs | r ∈ R ∧ s ∈ S}에 해당하는 연산은?",
            "additional_content": null,
            "choices": {
                "1": "Union",
                "2": "Intersection",
                "3": "Difference",
                "4": "Cartesian Product"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 45,
            "question_type": "multiple_choice",
            "question_description": "병렬 데이터베이스 환경에서 수평 분할(Horizontal Partitioning)에 사용되지 않는 기법은?",
            "additional_content": null,
            "choices": {
                "1": "Round-robin",
                "2": "Range partitioning",
                "3": "Predictive partitioning",
                "4": "Hash partitioning"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 46,
            "question_type": "multiple_choice",
            "question_description": "분산 데이터베이스 시스템에 대한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "분산 시스템은 논리적으로 하나의 시스템으로 보인다",
                "2": "분산 프로세서는 물리적으로 분산된 프로세서를 의미한다",
                "3": "모든 데이터는 중앙에 집중되어 관리된다",
                "4": "네트워크를 통해 연결된 여러 노드로 구성된다"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 47,
            "question_type": "multiple_choice",
            "question_description": "스키마 유형 중 하나로 조직이나 기관의 종합적인 관점에서 전체 데이터베이스의 논리적 구조를 나타내며, 모든 응용 프로그램이나 사용자가 요구하는 모든 데이터를 포괄하여 전체 조직의 데이터베이스 구조를 나타내는 것은?",
            "additional_content": null,
            "choices": {
                "1": "Relational Schema",
                "2": "External Schema",
                "3": "Internal Schema",
                "4": "Conceptual Schema"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 48,
            "question_type": "multiple_choice",
            "question_description": "'학적' 테이블에서 전화번호가 NULL이 아닌 모든 학생의 학생명을 검색하는 SQL 문장으로 올바른 것은?",
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
            "question_description": "SQL에서 DDL 문장이 아닌 것은?",
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
            "question_number": 50,
            "question_type": "multiple_choice",
            "question_description": "다음 SQL 문장의 의미는?",
            "additional_content": "INSERT INTO 컴퓨터과테이블(학번, 이름, 학년)\nSELECT 학번, 이름, 학년\nFROM 학생테이블\nWHERE 학과='컴퓨터'",
            "choices": {
                "1": "학생테이블에서 학과가 '컴퓨터'인 사람의 학번, 이름, 학년을 검색한다",
                "2": "학생테이블에 학과가 '컴퓨터'인 사람의 학번, 이름, 학년을 삽입한다",
                "3": "학생테이블에서 학과가 '컴퓨터'인 사람의 학번, 이름, 학년을 검색하여 컴퓨터과테이블에 삽입한다",
                "4": "컴퓨터과테이블에서 학과가 '컴퓨터'인 사람의 학번, 이름, 학년을 검색하여 학생테이블에 삽입한다"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 51,
            "question_type": "multiple_choice",
            "question_description": "관계 R의 차수(degree)가 3이고 카디널리티(cardinality)가 3이며, 관계 S의 차수가 4이고 카디널리티가 4일 때, 두 관계의 카티션 곱(Cartesian Product) 결과의 차수와 카디널리티는?",
            "additional_content": null,
            "choices": {
                "1": "4, 4",
                "2": "7, 7",
                "3": "7, 12",
                "4": "12, 12"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 52,
            "question_type": "multiple_choice",
            "question_description": "다음 '판매실적' 테이블에서 서울 지역의 지점명과 판매액을 판매액 내림차순으로 출력하는 SQL 문장으로 가장 적절한 것은?",
            "additional_content": "| 도시 | 지점명 | 판매액 |\n| 서울 | 강남 지점 | 330 |\n| 서울 | 강북 지점 | 168 |\n| 광주 | 광주 지점 | 197 |\n| 서울 | 강서 지점 | 158 |\n| 서울 | 강동 지점 | 197 |\n| 대전 | 대전 지점 | 165 |",
            "choices": {
                "1": "SELECT 지점명, 판매액 FROM 판매실적 WHERE 도시= \"서울\" ORDER BY 판매액 DESC;",
                "2": "SELECT 지점명, 판매액 FROM 판매실적 ORDER BY 판매액 DESC;",
                "3": "SELECT 지점명, 판매액 FROM 판매실적 WHERE 도시= \"서울\" ASC;",
                "4": "SELECT * FROM 판매실적 WHEN 도시= \"서울\" ORDER BY 판매액 DESC;"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 53,
            "question_type": "multiple_choice",
            "question_description": "트랜잭션 실행 중 장애로 인해 손상된 데이터베이스를 장애 발생 전의 정상 상태로 복원하는 작업은?",
            "additional_content": null,
            "choices": {
                "1": "Recovery",
                "2": "Restart",
                "3": "Commit",
                "4": "Abort"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 54,
            "question_type": "multiple_choice",
            "question_description": "다음 조건을 모두 만족하는 정규형은?",
            "additional_content": "• 테이블 R의 모든 도메인은 원자값으로만 구성된다.\n• 테이블 R의 모든 비키 필드는 키에 함수적으로 종속되며, 키의 일부가 결정자가 되는 부분 종속이 존재하지 않는다.\n• 테이블 R에 존재하는 모든 함수적 종속에서 결정자가 후보키이다.",
            "choices": {
                "1": "BCNF",
                "2": "1정규형(1NF)",
                "3": "2정규형(2NF)",
                "4": "3정규형(3NF)"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 55,
            "question_type": "multiple_choice",
            "question_description": "관계형 데이터베이스에서 정규화에 대한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "정규화를 수행하지 않으면 하나의 릴레이션에 여러 종류의 정보가 표현되어 해당 릴레이션을 조작할 때 이상 현상이 발생할 수 있다",
                "2": "정규화의 목적은 각 릴레이션에 분산된 종속성을 하나의 릴레이션으로 통합하는 것이다",
                "3": "이상 현상은 데이터 간에 존재하는 함수적 종속성에 의해 발생할 수 있다",
                "4": "정규화를 잘못 수행하면 불필요한 데이터 중복이 발생하여 릴레이션 조작 시 문제가 발생할 수 있다"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 56,
            "question_type": "multiple_choice",
            "question_description": "분산 데이터베이스에서 투명성(Transparency)의 종류가 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "위치 투명성",
                "2": "복제 투명성",
                "3": "장애 투명성",
                "4": "매체 접근 투명성"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 57,
            "question_type": "multiple_choice",
            "question_description": "다음 질의에 대한 SQL 문장은?",
            "additional_content": "프로젝트 번호(PNO)가 1, 2, 3인 프로젝트에서 일하는 직원의 주민등록번호(JUNO)를 검색하라. (단, 직원 테이블(WORKS)은 PNO, JUNO 필드로 구성되어 있다.)",
            "choices": {
                "1": "SELECT WORKS FROM JUNO WHERE PNO IN 1, 2, 3;",
                "2": "SELECT WORKS FROM JUNO WHERE PNO ON 1, 2, 3;",
                "3": "SELECT JUNO FROM WORKS WHERE PNO IN(1, 2, 3);",
                "4": "SELECT JUNO FROM WORKS WHERE PNO ON(1, 2, 3);"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 58,
            "question_type": "multiple_choice",
            "question_description": "다음 두 관계에서 외래키로 사용되는 것은? (단, 밑줄 친 속성은 기본키이다.)",
            "additional_content": "과목(<u>과목번호</u>, 과목명)\n수강(<u>수강번호</u>, 학번, 과목번호, 학기)",
            "choices": {
                "1": "과목번호",
                "2": "수강번호",
                "3": "학번",
                "4": "학기"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 59,
            "question_type": "multiple_choice",
            "question_description": "데이터베이스에서 병행제어의 목적으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "시스템 활용도 최대화",
                "2": "사용자에 대한 응답시간 최소화",
                "3": "데이터베이스 공유 최소화",
                "4": "데이터베이스 일관성 유지"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 60,
            "question_type": "multiple_choice",
            "question_description": "객체 지향 기법에서 하나 이상의 유사한 객체들을 묶어서 하나의 공통된 특성을 표현한 것은?",
            "additional_content": null,
            "choices": {
                "1": "메시지",
                "2": "클래스",
                "3": "추상화",
                "4": "메소드"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 61,
            "question_type": "multiple_choice",
            "question_description": "C Class에 속하는 IP address는?",
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
            "question_number": 62,
            "question_type": "multiple_choice",
            "question_description": "다음 Python 프로그램이 실행되었을 때, 실행 결과는?",
            "additional_content": "a = 100\nlist_data = ['a','b','c']\ndict_data = {'a':90, 'b':95}\nprint(list_data[0])\nprint(dict_data['a'])",
            "choices": {},
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 63,
            "question_type": "multiple_choice",
            "question_description": "파이썬의 변수 작성 규칙 설명으로 옳지 않은 것은?",
            "additional_content": null,
            "choices": {
                "1": "첫 자리에 숫자를 사용할 수 없다",
                "2": "영문 대문자/소문자, 숫자, 밑줄(_)의 사용이 가능하다",
                "3": "변수 이름의 중간에 공백을 사용할 수 있다",
                "4": "이미 사용되고 있는 예약어는 사용할 수 없다"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 64,
            "question_type": "multiple_choice",
            "question_description": "다음 C언어 프로그램에서 밑줄 친 부분과 동일한 의미를 가지는 것은 어떤것인가?",
            "additional_content": "#include <stdio.h>\nmain() {\n    int a, b;\n    for (a = 0; a < 2; a++)\n        for (b = 0; b < 2; b++)\n            printf(\"%d\", !a && !b); // 밑줄 친 부분\n}",
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
            "question_description": "다음 중 페이지 교체(Page Replacement) 알고리즘이 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "FIFO(First-In-First-Out)",
                "2": "LUF(Least Used First)",
                "3": "Optimal",
                "4": "LRU(Least Recently Used)"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 66,
            "question_type": "multiple_choice",
            "question_description": "HRN 방식으로 스케줄링 할 경우, 입력된 작업이 다음과 같을 때 처리되는 작업 순서로 옳은 것은?",
            "additional_content": "| 작업 | 대기 시간 | 서비스(실행)시간 |\n| A | 5 | 20 |\n| B | 40 | 20 |\n| C | 15 | 45 |\n| D | 20 | 2 |",
            "choices": {
                "1": "A→B→C→D",
                "2": "A→C→B→D",
                "3": "D→B→C→A",
                "4": "D→A→B→C"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 67,
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
            "question_number": 68,
            "question_type": "multiple_choice",
            "question_description": "시간 구역성(Temporal Locality)과 거리가 먼 것은?",
            "additional_content": null,
            "choices": {
                "1": "루프",
                "2": "서브루틴",
                "3": "배열 순회",
                "4": "스택"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 69,
            "question_type": "multiple_choice",
            "question_description": "TCP 헤더와 관련한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "순서 번호(Sequence Number)는 전달하는 바이트마다 번호가 부여된다",
                "2": "수신 번호 확인(Acknowledgement Number)은 상대편 호스트에서 받으려는 바이트의 번호를 정의한다",
                "3": "체크섬(Checksum)은 데이터를 포함한 세그먼트의 오류를 검사한다",
                "4": "윈도우 크기는 송수신 측의 버퍼 크기로 최대 크기는 32767bit이다"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 70,
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
            "question_number": 71,
            "question_type": "multiple_choice",
            "question_description": "192.168.1.0/24 네트워크를 FLSM 방식을 이용하여 4개의 Subnet으로 나누고 IP Subnet-zero를 적용했다. 이 때 Subnetting된 네트워크 중 4번째 네트워크의 4번째 사용 가능한 IP는 무엇인가?",
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
            "question_number": 72,
            "question_type": "multiple_choice",
            "question_description": "UNIX에 대한 설명으로 옳지 않은 것은?",
            "additional_content": null,
            "choices": {
                "1": "상당 부분 C 언어를 사용하여 작성되었으며, 이식성이 우수하다",
                "2": "사용자는 하나 이상의 작업을 백그라운드에서 수행할 수 있어 여러 개의 작업을 병행 처리할 수 있다",
                "3": "쉘(shell)은 프로세스 관리, 기억장치 관리, 입/출력 관리 등의 기능을 수행한다",
                "4": "두 사람 이상의 사용자가 동시에 시스템을 사용할 수 있어 정보와 유틸리티들을 공유하는 편리한 작업 환경을 제공한다"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 73,
            "question_type": "multiple_choice",
            "question_description": "17KB 프로그램을 Best Fit 방식으로 적재할 때 내부 단편화의 크기는? (단, 빈 메모리 공간은 20KB, 16KB, 8KB, 40KB이다.)",
            "additional_content": null,
            "choices": {
                "1": "3KB",
                "2": "23KB",
                "3": "64KB",
                "4": "67KB"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 74,
            "question_type": "multiple_choice",
            "question_description": "두 논리값 중 하나라도 참이면 1을 반환하고, 둘 다 거짓이면 0을 반환하는 C언어 연산자는?",
            "additional_content": null,
            "choices": {
                "1": "||",
                "2": "&&",
                "3": "**",
                "4": "!="
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 75,
            "question_type": "multiple_choice",
            "question_description": "결합도(Coupling)의 수준을 약한 것부터 강한 것 순으로 올바르게 나열한 것은?",
            "additional_content": null,
            "choices": {
                "1": "Stamp, Data, Control, Common, Content",
                "2": "Data, Stamp, Control, Common, Content",
                "3": "Data, Control, Stamp, Common, Content",
                "4": "Stamp, Control, Data, Common, Content"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 76,
            "question_type": "multiple_choice",
            "question_description": "다음 Java if-else 조건문을 삼항 연산자로 올바르게 표현한 것은?",
            "additional_content": "int i = 7, j = 9;\nint k;\nif (i > j)\n    k = i - j;\nelse\n    k = i + j;",
            "choices": {
                "1": "int k = (i > j) ? i - j : i + j;",
                "2": "int k = (i > j) ? i + j : i - j;",
                "3": "int k = (i < j) ? i - j : i + j;",
                "4": "int k = (i < j) ? i + j : i - j;"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 77,
            "question_type": "multiple_choice",
            "question_description": "메모리 처리 과정에서 오류가 발생하여 잘못된 동작을 일으키는 프로그램 취약점은?",
            "additional_content": null,
            "choices": {
                "1": "FTP Bounce Attack",
                "2": "SQL Injection",
                "3": "Buffer Overflow",
                "4": "Directory Traversal Attack"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 78,
            "question_type": "multiple_choice",
            "question_description": "배치 프로그램의 필수 요소에 대한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "자동화 : 사용자의 개입 없이 실행",
                "2": "안정성 : 문제 발생 시 추적 가능",
                "3": "대용량 : 대용량 데이터 처리",
                "4": "무결성 : 다른 응용 프로그램에 간섭 없이 완료"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 79,
            "question_type": "multiple_choice",
            "question_description": "C언어에서 정수형 데이터 타입으로 올바른 것은?",
            "additional_content": null,
            "choices": {
                "1": "int",
                "2": "float",
                "3": "char",
                "4": "double"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 80,
            "question_type": "multiple_choice",
            "question_description": "소프트웨어 생명주기 모델 중 프로토타입 모델의 장점이 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "단기간 생산을 위해 비효율적인 언어나 알고리즘을 사용한다",
                "2": "사용자 요구사항을 반영할 수 있다",
                "3": "클라이언트가 최종 제품의 일부를 미리 볼 수 있다",
                "4": "공통 참조 모델을 제공한다"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 81,
            "question_type": "multiple_choice",
            "question_description": "COCOMO 모델에서 조직 내에서 배치 데이터 처리, 과학/기술 계산, 사업 데이터 처리 등을 위해 개발하는 소규모 소프트웨어(5만 라인 미만)에 해당하는 모델 유형은?",
            "additional_content": null,
            "choices": {
                "1": "Embedded",
                "2": "Organic",
                "3": "Semi-Detached",
                "4": "Semi-Embedded"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 82,
            "question_type": "multiple_choice",
            "question_description": "CMMI의 단계가 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "Initial",
                "2": "Managed",
                "3": "Defined",
                "4": "Repeatable"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 83,
            "question_type": "multiple_choice",
            "question_description": "프로젝트에 내재된 위험을 인식하고 분석하여 그 영향을 파악하며, 프로젝트 성공을 위해 사전에 위험을 예측하고 대비하기 위한 모든 기법과 활동을 포함하는 것은?",
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
            "category_id": 5,
            "question_number": 84,
            "question_type": "multiple_choice",
            "question_description": "취약점 관리를 위한 응용 프로그램 보안 설정과 거리가 먼 것은?",
            "additional_content": null,
            "choices": {
                "1": "서버실 출입 통제",
                "2": "실행 프로세스 권한 설정",
                "3": "운영체제 접근 제한",
                "4": "운영체제 정보 수집 제한"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 85,
            "question_type": "multiple_choice",
            "question_description": "다음 특징에 해당하는 용어로 올바른 것은?",
            "additional_content": "• 오픈소스 기반의 분산 컴퓨팅 플랫폼이다.\n• 일반적인 PC급 컴퓨터들로 가상화된 대용량 저장소를 구성한다.\n• 다양한 소스에서 생성되는 빅데이터를 효율적으로 저장하고 처리한다.",
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
            "question_number": 86,
            "question_type": "multiple_choice",
            "question_description": "IP나 ICMP의 특성을 이용하여 특정 사이트에 집중적으로 데이터를 보내 네트워크나 시스템을 사용할 수 없게 만드는 공격 방법은?",
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
            "question_number": 87,
            "question_type": "multiple_choice",
            "question_description": "백도어 탐지 방법이 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "무결성 검사",
                "2": "닫힌 포트 검사",
                "3": "로그 분석",
                "4": "SetUID 파일 검사"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 88,
            "question_type": "multiple_choice",
            "question_description": "정보 보안의 3대 요소가 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "기밀성",
                "2": "휘발성",
                "3": "무결성",
                "4": "가용성"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 89,
            "question_type": "multiple_choice",
            "question_description": "무선 LAN의 한계를 극복하고 대규모 기기 네트워크에 최적화되어 차세대 모바일 통신, 홈 네트워킹, 공공 안전 등에 사용되는 새로운 네트워크 기술은?",
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
            "question_number": 90,
            "question_type": "multiple_choice",
            "question_description": "물리적 위협으로 인해 발생하는 문제가 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "자연재해(화재, 홍수)로 인한 위협",
                "2": "하드웨어 손상/고장으로 인한 서비스 중단",
                "3": "방화/테러로 인한 하드웨어/기록매체의 물리적 파괴",
                "4": "잘못된 방화벽 설정으로 인한 네트워크/서버 보안 위협"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 91,
            "question_type": "multiple_choice",
            "question_description": "COCOMO(Constructive Cost Model) 모델의 특징이 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "Man-Month 단위로 추정이 가능하다",
                "2": "Boehm이 제안했으며 소스코드 라인 수를 기반으로 추정한다",
                "3": "통계적 분석을 바탕으로 중소규모 프로젝트에 적합하다",
                "4": "프로젝트 개발 유형에 따라 3가지 모드(객체, 동적, 기능)로 구분된다"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 92,
            "question_type": "multiple_choice",
            "question_description": "공개키 암호화에서 널리 사용되는 암호화 알고리즘으로 정수 인수분해 문제를 이용하는 것은?",
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
            "question_number": 93,
            "question_type": "multiple_choice",
            "question_description": "암호화와 복호화에 동일한 키를 사용하는 암호화 알고리즘은?",
            "additional_content": null,
            "choices": {
                "1": "RSA",
                "2": "AES",
                "3": "DSA",
                "4": "ECC"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 94,
            "question_type": "multiple_choice",
            "question_description": "소프트웨어 개발 프레임워크 적용 시 기대되는 효과가 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "품질 보증",
                "2": "시스템 복잡도 증가",
                "3": "개발 용이성",
                "4": "변경 용이성"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 95,
            "question_type": "multiple_choice",
            "question_description": "전자 칩처럼 소프트웨어 구성요소(블록/모듈)를 만들어 조립하여 소프트웨어를 완성하는 소프트웨어 재사용 방법은?",
            "additional_content": null,
            "choices": {
                "1": "조립 지향",
                "2": "생성 지향",
                "3": "분리 지향",
                "4": "구조 지향"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 96,
            "question_type": "multiple_choice",
            "question_description": "다음 내용이 설명하는 것은?",
            "additional_content": "• 네트워크상에서 Fibre Channel 스위치의 고속 전송, 장거리 연결, 다중 프로토콜 지원 등의 장점을 활용한다.\n• 서로 다른 운영체제를 가진 다양한 종류의 기기들이 네트워크를 통해 동일한 저장장치에서 데이터를 공유할 수 있도록 하여 여러 저장장치나 백업장치를 통합하는 시스템이다.",
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
            "question_number": 97,
            "question_type": "multiple_choice",
            "question_description": "사용자가 시스템에 로그인하여 명령을 내리는 과정에서 시스템이 수행하는 작업에 해당하는 것은?",
            "additional_content": "• 시스템에 자신의 신원을 증명하는 과정이다.\n• ID와 패스워드를 입력하는 것이 가장 일반적인 예이다.",
            "choices": {
                "1": "Aging",
                "2": "Accounting",
                "3": "Authorization",
                "4": "Authentication"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 98,
            "question_type": "multiple_choice",
            "question_description": "OSI 7 Layer의 모든 계층에서 프로토콜과 패킷 내부 내용을 식별하여 침입 시도, 해킹 등을 탐지하고 트래픽을 조정하는 패킷 분석 기술은?",
            "additional_content": null,
            "choices": {
                "1": "PLCP(Packet Level Control Processor)",
                "2": "Traffic Distributor",
                "3": "Packet Tree",
                "4": "DPI(Deep Packet Inspection)"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 99,
            "question_type": "multiple_choice",
            "question_description": "세션 하이재킹 탐지 방법과 거리가 먼 것은?",
            "additional_content": null,
            "choices": {
                "1": "FTP SYN SEGMENT 탐지",
                "2": "비동기 상태 탐지",
                "3": "ACK STORM 탐지",
                "4": "패킷 손실 및 재전송 증가 탐지"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 100,
            "question_type": "multiple_choice",
            "question_description": "네트워크 장비 중 스위치(Switch)의 특징은?",
            "additional_content": null,
            "choices": {
                "1": "데이터 링크 계층에서 동작",
                "2": "네트워크 계층에서 동작",
                "3": "전송 계층에서 동작",
                "4": "응용 계층에서 동작"
            },
            "score": 1
        }
    ]
}
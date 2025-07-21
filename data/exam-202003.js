const EXAM_DATA_202003 = {
    "year": "2020",
    "round": 4,
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
            "question_description": "XP(eXtreme Programming)의 기본원리로 볼 수 없는 것은?",
            "additional_content": null,
            "choices": {
                "1": "Linear Sequential Method",
                "2": "Pair Programming",
                "3": "Collective Ownership",
                "4": "Continuous Integration"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 2,
            "question_type": "multiple_choice",
            "question_description": "럼바우(Rumbaugh) 객체지향 분석 기법에서 동적 모델링에 활용되는 다이어그램은?",
            "additional_content": null,
            "choices": {
                "1": "객체 다이어그램(Object Diagram)",
                "2": "패키지 다이어그램(Package Diagram)",
                "3": "상태 다이어그램(State Diagram)",
                "4": "자료 흐름도(Data Flow Diagram)"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 3,
            "question_type": "multiple_choice",
            "question_description": "CASE(Computer Aided Software Engineering)의 주요 기능으로 옳지 않은 것은?",
            "additional_content": null,
            "choices": {
                "1": "S/W 라이프 사이클 전 단계의 연결",
                "2": "그래픽 지원",
                "3": "다양한 소프트웨어 개발 모형 지원",
                "4": "언어 번역"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 4,
            "question_type": "multiple_choice",
            "question_description": "객체지향 기법의 캡슐화(Encapsulation)에 대한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "인터페이스가 단순화 된다.",
                "2": "소프트웨어 재사용성이 높아진다.",
                "3": "변경 발생 시 오류의 파급효과가 적다.",
                "4": "상위 클래스의 모든 속성과 연산을 하위 클래스가 물려받는 것을 의미한다."
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 5,
            "question_type": "multiple_choice",
            "question_description": "다음 내용이 설명하는 객체지향 설계 원칙은?",
            "additional_content": "**설명 내용:**\n\n• 클라이언트는 자신이 사용하지 않는 메서드와 의존관계를 맺으면 안 된다.\n• 클라이언트가 사용하지 않는 인터페이스 때문에 영향을 받아서는 안 된다.",
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
            "question_number": 6,
            "question_type": "multiple_choice",
            "question_description": "파이프 필터 형태의 소프트웨어 아키텍처에 대한 설명으로 옳은 것은?",
            "additional_content": null,
            "choices": {
                "1": "노드와 간선으로 구성된다.",
                "2": "서브시스템이 입력데이터를 받아 처리하고 결과를 다음 서브시스템으로 넘겨주는 과정을 반복한다.",
                "3": "계층 모델이라고도 한다.",
                "4": "3개의 서브시스템(모델, 뷰, 제어)으로 구성되어 있다."
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 7,
            "question_type": "multiple_choice",
            "question_description": "코드화 대상 항목의 중량, 면적, 용량 등의 물리적 수치를 이용하여 만든 코드는?",
            "additional_content": null,
            "choices": {
                "1": "순차 코드",
                "2": "10진 코드",
                "3": "표의 숫자 코드",
                "4": "블록 코드"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 8,
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
            "question_number": 9,
            "question_type": "multiple_choice",
            "question_description": "DFD(data flow diagram)에 대한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "자료 흐름 그래프 또는 버블(bubble) 차트라고도 한다.",
                "2": "구조적 분석 기법에 이용된다.",
                "3": "시간 흐름을 명확하게 표현할 수 있다.",
                "4": "DFD의 요소는 화살표, 원, 사각형, 직선(단선/이중선)으로 표시한다."
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 10,
            "question_type": "multiple_choice",
            "question_description": "그래픽 표기법을 이용하여 소프트웨어 구성 요소를 모델링하는 럼바우 분석 기법에 포함되지 않는 것은?",
            "additional_content": null,
            "choices": {
                "1": "객체 모델링",
                "2": "기능 모델링",
                "3": "동적 모델링",
                "4": "블랙박스 분석 모델링"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 11,
            "question_type": "multiple_choice",
            "question_description": "UML의 기본 구성요소가 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "Things",
                "2": "Terminal",
                "3": "Relationship",
                "4": "Diagram"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 12,
            "question_type": "multiple_choice",
            "question_description": "소프트웨어의 상위 설계에 속하지 않는 것은?",
            "additional_content": null,
            "choices": {
                "1": "아키텍처 설계",
                "2": "모듈 설계",
                "3": "인터페이스 정의",
                "4": "사용자 인터페이스 설계"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 13,
            "question_type": "multiple_choice",
            "question_description": "다음 중 자료 사전(Data Dictionary)에서 선택의 의미를 나타내는 것은?",
            "additional_content": null,
            "choices": {
                "1": "[ ]",
                "2": "{ }",
                "3": "+",
                "4": "="
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 14,
            "question_type": "multiple_choice",
            "question_description": "소프트웨어의 사용자 인터페이스 개발 시스템(User Interface Development System)이 가져야 할 기능이 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "사용자 입력의 검증",
                "2": "에러 처리와 에러 메시지 처리",
                "3": "도움과 프롬프트(prompt) 제공",
                "4": "소스 코드 분석 및 오류 복구"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 15,
            "question_type": "multiple_choice",
            "question_description": "요구사항 명세 기법에 대한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "비정형 명세 기법은 사용자의 요구를 표현할 때 자연어를 기반으로 서술한다.",
                "2": "비정형 명세 기법은 사용자의 요구를 표현할 때 Z 비정형 명세 기법을 사용한다.",
                "3": "정형 명세 기법은 사용자의 요구를 표현할 때 수학적인 원리와 표기법을 이용한다.",
                "4": "정형 명세 기법은 비정형 명세 기법에 비해 표현이 간결하다."
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 16,
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
            "category_id": 2,
            "question_number": 17,
            "question_type": "multiple_choice",
            "question_description": "애자일 방법론에 해당하지 않는 것은?",
            "additional_content": null,
            "choices": {
                "1": "기능중심 개발",
                "2": "스크럼",
                "3": "익스트림 프로그래밍",
                "4": "모듈중심 개발"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 18,
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
            "category_id": 2,
            "question_number": 19,
            "question_type": "multiple_choice",
            "question_description": "GoF(Gangs of Four) 디자인 패턴 분류에 해당하지 않는 것은?",
            "additional_content": null,
            "choices": {
                "1": "생성 패턴",
                "2": "구조 패턴",
                "3": "행위 패턴",
                "4": "추상 패턴"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 20,
            "question_type": "multiple_choice",
            "question_description": "바람직한 소프트웨어 설계 지침이 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "적당한 모듈의 크기를 유지한다.",
                "2": "모듈 간의 접속 관계를 분석하여 복잡도와 중복을 줄인다.",
                "3": "모듈 간의 결합도는 강할수록 바람직하다.",
                "4": "모듈 간의 효과적인 제어를 위해 설계에서 계층적 자료 조직이 제시되어야 한다."
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 21,
            "question_type": "multiple_choice",
            "question_description": "소프트웨어 패키징 도구 활용 시 고려 사항으로 틀린 것은?",
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
            "question_number": 22,
            "question_type": "multiple_choice",
            "question_description": "EAI(Enterprise Application Integration) 구축유형 중 Hybrid에 대한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "Hub & Spoke와 Message Bus의 혼합방식이다.",
                "2": "필요한 경우 한 가지 방식으로 EAI 구현이 가능하다.",
                "3": "데이터 병목현상을 최소화할 수 있다.",
                "4": "중간에 미들웨어를 두지 않고 각 애플리케이션을 point to point로 연결한다."
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 23,
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
            "question_number": 24,
            "question_type": "multiple_choice",
            "question_description": "다음 Postfix 연산식에 대한 연산결과로 옳은 것은?",
            "additional_content": "**연산식:** 3 4 * 5 6 + -",
            "choices": {
                "1": "35",
                "2": "42",
                "3": "77",
                "4": "360"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 25,
            "question_type": "multiple_choice",
            "question_description": "인터페이스 보안을 위해 네트워크 영역에 적용될 수 있는 것으로 거리가 먼 것은?",
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
            "question_description": "검증(Validation) 검사 기법 중 개발자의 장소에서 사용자가 개발자 앞에서 행해지며, 오류와 사용상의 문제점을 사용자와 개발자가 함께 확인하면서 검사하는 기법은?",
            "additional_content": null,
            "choices": {
                "1": "디버깅 검사",
                "2": "형상 검사",
                "3": "자료구조 검사",
                "4": "알파 검사"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 27,
            "question_type": "multiple_choice",
            "question_description": "다음 초기 자료에 대하여 삽입 정렬(Insertion Sort)을 이용하여 오름차순 정렬할 경우 1회전 후의 결과는?",
            "additional_content": "**초기 자료:** 8, 3, 4, 9, 7",
            "choices": {
                "1": "3, 4, 8, 7, 9",
                "2": "3, 4, 9, 7, 8",
                "3": "7, 8, 3, 4, 9",
                "4": "3, 8, 4, 9, 7"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 28,
            "question_type": "multiple_choice",
            "question_description": "소프트웨어 설치 매뉴얼에 대한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "설치과정에서 표시될 수 있는 예외상황에 관련 내용을 별도로 구분하여 설명한다.",
                "2": "설치 시작부터 완료할 때까지의 전 과장을 빠짐없이 순서대로 설명한다.",
                "3": "설치 매뉴얼은 개발자 기준으로 작성한다.",
                "4": "설치 매뉴얼에는 목차, 개요, 기본사항 등이 기본적으로 포함되어야 한다."
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 29,
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
            "question_number": 30,
            "question_type": "multiple_choice",
            "question_description": "소프트웨어 형상 관리에서 관리 항목에 포함되지 않는 것은?",
            "additional_content": null,
            "choices": {
                "1": "프로젝트 요구 분석서",
                "2": "소스 코드",
                "3": "운영 및 설치 지침서",
                "4": "프로젝트 개발 비용"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 31,
            "question_type": "multiple_choice",
            "question_description": "다음 설명에 해당하는 것은?",
            "additional_content": "**설명:** 물리적 저장 장치의 입장에서 본 데이터베이스 구조로서 실제로 데이터베이스에 저장될 레코드의 형식을 정의하고 저장 데이터 항목의 표현 방법, 내부 레코드의 물리적 순서 등을 나타낸다.",
            "choices": {
                "1": "외부 스키마",
                "2": "내부 스키마",
                "3": "개념 스키마",
                "4": "슈퍼 스키마"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 32,
            "question_type": "multiple_choice",
            "question_description": "다음 트리에 대한 INORDER 운행 결과는?",
            "additional_content": "**트리 구조:**\n\n• A (루트)\n• B (A의 왼쪽 자식)\n• C (A의 오른쪽 자식)\n• D (B의 왼쪽 자식)\n• E (B의 오른쪽 자식)\n• F (C의 오른쪽 자식, C는 왼쪽 자식 없음)",
            "choices": {
                "1": "DBAECF",
                "2": "ABDCEF",
                "3": "DBECFA",
                "4": "ABCDEF"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 33,
            "question_type": "multiple_choice",
            "question_description": "n개의 노드로 구성된 무방향 그래프의 최대 간선수는?",
            "additional_content": null,
            "choices": {
                "1": "n-1",
                "2": "n/2",
                "3": "n(n-1)/2",
                "4": "n(n+1)"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 34,
            "question_type": "multiple_choice",
            "question_description": "다음이 설명하는 테스트 용어는?",
            "additional_content": "**설명:** 테스트의 결과가 참인지 거짓인지를 판단하기 위해서 사전에 정의된 참값을 입력하여 비교하는 기법 및 활동을 말한다. 종류에는 참, 샘플링, 휴리스틱, 일관성 검사가 존재한다.",
            "choices": {
                "1": "테스트 케이스",
                "2": "테스트 시나리오",
                "3": "테스트 오라클",
                "4": "테스트 데이터"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 35,
            "question_type": "multiple_choice",
            "question_description": "빌드 자동화 도구에 대한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "Gradle은 실행할 처리 명령들을 모아 태스크로 만든 후 태스크 단위로 실행한다.",
                "2": "빌드 자동화 도구는 지속적인 통합개발환경에서 유용하게 활용된다.",
                "3": "빌드 자동화 도구에는 Ant, Gradle, Jenkins 등이 있다.",
                "4": "Jenkins는 Groovy를 기반으로 한 오픈소스로 안드로이드 앱 개발 환경에서 사용된다."
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 36,
            "question_type": "multiple_choice",
            "question_description": "저작권 관리 구성 요소에 대한 설명이 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "콘텐츠 제공자(Contents Provider) : 콘텐츠를 제공하는 저작권자",
                "2": "콘텐츠 분배자(Contents Distributor) : 콘텐츠를 메타 데이터와 함께 배포 가능한 단위로 묶는 기능",
                "3": "클리어링 하우스(Clearing House) : 키 관리 및 라이선스 발급 관리",
                "4": "DRM 컨트롤러 : 배포된 콘텐츠의 이용 권한을 통제"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 37,
            "question_type": "multiple_choice",
            "question_description": "블랙박스 테스트 기법으로 거리가 먼 것은?",
            "additional_content": null,
            "choices": {
                "1": "기초 경로 검사",
                "2": "동치 클래스 분해",
                "3": "경계값 분석",
                "4": "원인 결과 그래프"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 38,
            "question_type": "multiple_choice",
            "question_description": "해싱 함수 중 레코드 키를 여러 부분으로 나누고, 나눈 부분의 각 숫자를 더하거나 XOR한 값을 홈 주소로 사용하는 방식은?",
            "additional_content": null,
            "choices": {
                "1": "제산법",
                "2": "폴딩법",
                "3": "기수변환법",
                "4": "숫자분석법"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 39,
            "question_type": "multiple_choice",
            "question_description": "다음에서 설명하는 클린 코드 작성 원칙은?",
            "additional_content": "**설명:**\n\n• 한 번에 한 가지 처리만 수행한다.\n• 클래스/메소드/함수를 최소 단위로 분리한다.",
            "choices": {
                "1": "다형성",
                "2": "단순성",
                "3": "추상화",
                "4": "의존성"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 40,
            "question_type": "multiple_choice",
            "question_description": "디지털 저작권 관리(DRM) 기술과 거리가 먼 것은?",
            "additional_content": null,
            "choices": {
                "1": "콘텐츠 암호화 및 키 관리",
                "2": "콘텐츠 식별체계 표현",
                "3": "콘텐츠 오류 감지 및 복구",
                "4": "라이선스 발급 및 관리"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 41,
            "question_type": "multiple_choice",
            "question_description": "다음 설명과 관련 있는 트랜잭션의 특징은?",
            "additional_content": "**설명:** 트랜잭션의 연산은 모두 실행되거나, 모두 실행되지 않아야 한다.",
            "choices": {
                "1": "Durability",
                "2": "Isolation",
                "3": "Consistency",
                "4": "Atomicity"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 42,
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
            "category_id": 3,
            "question_number": 43,
            "question_type": "multiple_choice",
            "question_description": "정규화된 엔티티, 속성, 관계를 시스템의 성능 향상과 개발 운영의 단순화를 위해 중복, 통합, 분리 등을 수행하는 데이터 모델링 기법은?",
            "additional_content": null,
            "choices": {
                "1": "인덱스정규화",
                "2": "반정규화",
                "3": "집단화",
                "4": "머징"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 44,
            "question_type": "multiple_choice",
            "question_description": "학생 테이블을 생성한 후, 성별 필드가 누락되어 이를 추가하려고 한다. 이에 적합한 SQL 명령어는?",
            "additional_content": null,
            "choices": {
                "1": "INSERT",
                "2": "ALTER",
                "3": "DROP",
                "4": "MODIFY"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 45,
            "question_type": "multiple_choice",
            "question_description": "정규화의 필요성으로 거리가 먼 것은?",
            "additional_content": null,
            "choices": {
                "1": "데이터 구조의 안정성 최대화",
                "2": "중복 데이터의 활성화",
                "3": "수정, 삭제 시 이상현상의 최소화",
                "4": "테이블 불일치 위험의 최소화"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 46,
            "question_type": "multiple_choice",
            "question_description": "개체 관계 모델의 E-R 다이어그램에서 사용되는 기호와 그 의미의 연결이 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "사각형 - 개체 타입",
                "2": "삼각형 - 속성",
                "3": "선 - 개체 타입과 속성을 연결",
                "4": "마름모 - 관계 타입"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 47,
            "question_type": "multiple_choice",
            "question_description": "다음 SQL문에서 빈칸에 들어갈 내용으로 옳은 것은?",
            "additional_content": "**SQL문:** UPDATE 회원 ( ) 전화번호='010-14' WHERE 회원번호='N4';",
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
            "question_number": 48,
            "question_type": "multiple_choice",
            "question_description": "릴레이션에 있는 모든 튜플에 대해 유일성은 만족시키지만 최소성은 만족시키지 못하는 키는?",
            "additional_content": null,
            "choices": {
                "1": "후보키",
                "2": "기본키",
                "3": "슈퍼키",
                "4": "외래키"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 49,
            "question_type": "multiple_choice",
            "question_description": "DBA가 사용자 PARK에게 테이블 [STUDENT]의 데이터를 갱신할 수 있는 시스템 권한을 부여하고자 하는 SQL문을 작성하고자 한다. 다음에 주어진 SQL문의 빈칸을 알맞게 채운 것은?",
            "additional_content": "**SQL문:** SQL>GRANT STUDENT TO PARK;",
            "choices": {
                "1": "INSERT, INTO",
                "2": "ALTER, TO",
                "3": "UPDATE, ON",
                "4": "REPLACE, IN"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 50,
            "question_type": "multiple_choice",
            "question_description": "관계대수에 대한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "주어진 릴레이션 조작을 위한 연산의 집합이다.",
                "2": "일반 집합 연산과 순수 관계 연산으로 구분된다.",
                "3": "질의에 대한 해를 구하기 위해 수행해야 할 연산의 순서를 명시한다.",
                "4": "원하는 정보와 그 정보를 어떻게 유도하는가를 기술하는 비절차적 방법이다."
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 51,
            "question_type": "multiple_choice",
            "question_description": "다음 SQL문의 실행 결과는?",
            "additional_content": "**SQL문:**\n```sql\nSELECT 과목이름\nFROM 성적\nWHERE EXISTS (SELECT 학번\n              FROM 학생 WHERE 학생.학번 = 성적.학번 AND 학생.학과 IN ('전산', '전기') AND 학생.주소='경기');\n```\n\n**테이블 정보:**\n\n**[학생] 테이블:**\n| 학번 | 이름 | 학년 | 학과 | 주소 |\n|------|------|------|------|------|\n| 1000 | 김철수 | 1 | 전산 | 서울 |\n| 2000 | 고영준 | 1 | 전기 | 경기 |\n| 3000 | 유진호 | 2 | 전자 | 경기 |\n| 4000 | 김영진 | 2 | 전산 | 경기 |\n| 5000 | 정현영 | 3 | 전자 | 서울 |\n\n**[성적] 테이블:**\n| 학번 | 과목번호 | 과목이름 | 학점 | 점수 |\n|------|----------|----------|------|------|\n| 1000 | A100 | 자료구조 | A | 91 |\n| 2000 | A200 | DB | A+ | 99 |\n| 3000 | A100 | 자료구조 | B+ | 88 |\n| 3000 | A200 | DB | B | 85 |\n| 4000 | A200 | DB | A | 94 |\n| 4000 | A300 | 운영체제 | B+ | 89 |\n| 5000 | A300 | 운영체제 | B | 88 |",
            "choices": {
                "1": "DB",
                "2": "DB, DB",
                "3": "DB, DB, 운영체제",
                "4": "DB, 운영체제"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 52,
            "question_type": "multiple_choice",
            "question_description": "로킹(Locking) 기법에 대한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "로킹의 대상이 되는 객체의 크기를 로킹 단위라고 한다.",
                "2": "로킹 단위가 작아지면 병행성 수준이 낮아진다.",
                "3": "데이터베이스도 로킹 단위가 될 수 있다.",
                "4": "로킹 단위가 커지면 로크 수가 작아 로킹 오버헤드가 감소한다."
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 53,
            "question_type": "multiple_choice",
            "question_description": "사용자 X1에게 department 테이블에 대한 검색 연산을 회수하는 명령은?",
            "additional_content": null,
            "choices": {
                "1": "delete select on department to X1;",
                "2": "remove select on department from X1;",
                "3": "revoke select on department from X1;",
                "4": "grant select on department from X1;"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 54,
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
            "category_id": 3,
            "question_number": 55,
            "question_type": "multiple_choice",
            "question_description": "데이터 모델에 표시해야 할 요소로 거리가 먼 것은?",
            "additional_content": null,
            "choices": {
                "1": "논리적 데이터 구조",
                "2": "출력 구조",
                "3": "연산",
                "4": "제약 조건"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 56,
            "question_type": "multiple_choice",
            "question_description": "제 3정규형에서 보이스코드 정규형(BCNF)으로 정규화하기 위한 작업은?",
            "additional_content": null,
            "choices": {
                "1": "원자 값이 아닌 도메인을 분해",
                "2": "부분 함수 종속 제거",
                "3": "이행 함수 종속 제거",
                "4": "결정자가 후보키가 아닌 함수 종속 제거"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 57,
            "question_type": "multiple_choice",
            "question_description": "A1, A2, A3 3개 속성을 갖는 한 릴레이션에서 A1의 도메인은 3개 값, A2의 도메인은 2개 값, A3의 도메인은 4개 값을 갖는다. 이 릴레이션에 존재할 수 있는 가능한 튜플(Tuple)의 최대 수는?",
            "additional_content": null,
            "choices": {
                "1": "24",
                "2": "12",
                "3": "8",
                "4": "9"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 58,
            "question_type": "multiple_choice",
            "question_description": "데이터베이스 설계 시 물리적 설계 단계에서 수행하는 사항이 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "저장 레코드 양식 설계",
                "2": "레코드 집중의 분석 및 설계",
                "3": "접근 경로 설계",
                "4": "목표 DBMS에 맞는 스키마 설계"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 59,
            "question_type": "multiple_choice",
            "question_description": "한 릴레이션 스키마가 4개 속성, 2개 후보키 그리고 그 스키마의 대응 릴레이션 인스턴스가 7개 튜플을 갖는다면 그 릴레이션의 차수(degree)는?",
            "additional_content": null,
            "choices": {
                "1": "1",
                "2": "2",
                "3": "4",
                "4": "7"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 60,
            "question_type": "multiple_choice",
            "question_description": "데이터웨어하우스의 기본적인 OLAP(on-line analytical processing) 연산이 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "translate",
                "2": "roll-up",
                "3": "dicing",
                "4": "drill-down"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 61,
            "question_type": "multiple_choice",
            "question_description": "UNIX SHELL 환경 변수를 출력하는 명령어가 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "configenv",
                "2": "printenv",
                "3": "env",
                "4": "setenv"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 62,
            "question_type": "multiple_choice",
            "question_description": "Java 프로그래밍 언어의 정수 데이터 타입 중 'long'의 크기는?",
            "additional_content": null,
            "choices": {
                "1": "1byte",
                "2": "2byte",
                "3": "4byte",
                "4": "8byte"
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
            "question_description": "운영체제에서 커널의 기능이 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "프로세스 생성, 종료",
                "2": "사용자 인터페이스",
                "3": "기억 장치 할당, 회수",
                "4": "파일 시스템 관리"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 65,
            "question_type": "multiple_choice",
            "question_description": "OSI 7계층에서 단말기 사이에 오류 수정과 흐름 제어를 수행하여 신뢰성 있고 명확한 데이터를 전달하는 계층은?",
            "additional_content": null,
            "choices": {
                "1": "전송 계층",
                "2": "응용 계층",
                "3": "세션 계층",
                "4": "표현 계층"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 66,
            "question_type": "multiple_choice",
            "question_description": "다음 쉘 스크립트의 의미로 옳은 것은?",
            "additional_content": "**스크립트:**\n```bash\nuntil who grep wow\ndo\nsleep 5\ndone\n```",
            "choices": {
                "1": "wow 사용자가 로그인한 경우에만 반복문을 수행한다.",
                "2": "wow 사용자가 로그인할 때까지 반복문을 수행한다.",
                "3": "wow 문자열을 복사한다.",
                "4": "wow 사용자에 대한 정보를 무한 반복하여 출력한다."
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 67,
            "question_type": "multiple_choice",
            "question_description": "다음 자바 코드를 실행한 결과는?",
            "additional_content": "**코드:**\n```java\nint x=1, y=6;\nwhile (y--) {\nx++;\n}\nSystem.out.println(\"x=\" x+\"y=\" y);\n```",
            "choices": {
                "1": "x=7 y=0",
                "2": "x=6 y=-1",
                "3": "x=7 y=-1",
                "4": "Unresolved compilation problem 오류 발생"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 68,
            "question_type": "multiple_choice",
            "question_description": "다음 파이썬으로 구현된 프로그램의 실행 결과로 옳은 것은?",
            "additional_content": "**코드:**\n```python\n>>> a=[0,10,20,30,40,50,60,70,80,90]\n>>> a[:7:2]\n```",
            "choices": {
                "1": "[20, 60]",
                "2": "[60, 20]",
                "3": "[0, 20, 40, 60]",
                "4": "[10, 30, 50, 70]"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 69,
            "question_type": "multiple_choice",
            "question_description": "공통모듈의 재사용 범위에 따른 분류가 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "컴포넌트 재사용",
                "2": "더미코드 재사용",
                "3": "함수와 객체 재사용",
                "4": "애플리케이션 재사용"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 70,
            "question_type": "multiple_choice",
            "question_description": "다음과 같은 프로세스가 차례로 큐에 도착하였을 때, SJF(Shortest Job First) 정책을 사용할 경우 가장 먼저 처리되는 작업은?",
            "additional_content": "**프로세스 정보:**\n| 프로세스 번호 | 실행시간 |\n|---------------|----------|\n| P1 | 6 |\n| P2 | 8 |\n| P3 | 4 |\n| P4 | 3 |",
            "choices": {
                "1": "P1",
                "2": "P2",
                "3": "P3",
                "4": "P4"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 71,
            "question_type": "multiple_choice",
            "question_description": "4개의 페이지를 수용할 수 있는 주기억장치가 있으며, 초기에는 모두 비어 있다고 가정한다. 다음의 순서로 페이지 참조가 발생할 때, FIFO 페이지 교체 알고리즘을 사용할 경우 페이지 결함의 발생 횟수는?",
            "additional_content": "**페이지 참조 순서:** 1, 2, 3, 1, 2, 4, 5, 1",
            "choices": {
                "1": "6회",
                "2": "7회",
                "3": "8회",
                "4": "9회"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 72,
            "question_type": "multiple_choice",
            "question_description": "TCP 흐름제어기법 중 프레임이 손실되었을 때, 손실된 프레임 1개를 전송하고 수신자의 응답을 기다리는 방식으로 한 번에 프레임 1개만 전송할 수 있는 기법은?",
            "additional_content": null,
            "choices": {
                "1": "Slow Start",
                "2": "Sliding Window",
                "3": "Stop and Wait",
                "4": "Congestion Avoidance"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 73,
            "question_type": "multiple_choice",
            "question_description": "결합도(Coupling)에 대한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "데이터 결합도(Data Coupling)는 두 모듈이 매개변수로 자료를 전달할 때, 자료구조 형태로 전달되어 이용될 때 데이터가 결합되어 있다고 한다.",
                "2": "내용 결합도(Content Coupling)는 하나의 모듈이 직접적으로 다른 모듈의 내용을 참조할 때 두 모듈은 내용적으로 결합되어 있다고 한다.",
                "3": "공통 결합도(Common Coupling)는 두 모듈이 동일한 전역 데이터를 접근한다면 공통결합 되어 있다고 한다.",
                "4": "결합도(Coupling)는 두 모듈간의 상호작용, 또는 의존도 정도를 나타내는 것이다."
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 74,
            "question_type": "multiple_choice",
            "question_description": "응집도의 종류 중 서로 간에 어떠한 의미 있는 연관관계도 지니지 않은 기능 요소로 구성되는 경우이며, 서로 다른 상위 모들에 의해 호출되어 처리상의 연관성이 없는 서로 다른 기능을 수행하는 경우의 응집도는?",
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
            "question_description": "자바에서 사용하는 접근제어자의 종류가 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "internal",
                "2": "private",
                "3": "default",
                "4": "public"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 76,
            "question_type": "multiple_choice",
            "question_description": "UDP 특성에 해당되는 것은?",
            "additional_content": null,
            "choices": {
                "1": "데이터 전송 후, ACK를 받는다.",
                "2": "송신 중에 링크를 유지 관리하므로 신뢰성이 높다.",
                "3": "흐름제어나 순서제어가 없어 전송속도가 빠르다.",
                "4": "제어를 위한 오버헤드가 크다."
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 77,
            "question_type": "multiple_choice",
            "question_description": "다음과 같은 세그먼트 테이블을 가지는 시스템에서 논리 주소(2, 176)에 대한 물리 주소는?",
            "additional_content": "**세그먼트 테이블:**\n| 세그먼트번호 | 시작주소 | 길이(바이트) |\n|-------------|----------|-------------|\n| 0 | 670 | 248 |\n| 1 | 1752 | 422 |\n| 2 | 222 | 198 |\n| 3 | 996 | 604 |",
            "choices": {
                "1": "398",
                "2": "400",
                "3": "1928",
                "4": "1930"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 78,
            "question_type": "multiple_choice",
            "question_description": "TCP/IP에서 사용되는 논리주소를 물리주소로 변환시켜 주는 프로토콜은?",
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
            "question_number": 79,
            "question_type": "multiple_choice",
            "question_description": "C언어에서 구조체를 사용하여 데이터를 처리할 때 사용하는 것은?",
            "additional_content": null,
            "choices": {
                "1": "for",
                "2": "scanf",
                "3": "struct",
                "4": "abstract"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 80,
            "question_type": "multiple_choice",
            "question_description": "PHP에서 사용 가능한 연산자가 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "@",
                "2": "#",
                "3": "<>",
                "4": "==="
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 81,
            "question_type": "multiple_choice",
            "question_description": "이용자가 인터넷과 같은 공중망에 사설망을 구축하여 마치 전용망처럼 이용할 수 있도록 하는 기술은?",
            "additional_content": null,
            "choices": {
                "1": "VPN",
                "2": "NAT",
                "3": "DNS",
                "4": "DHCP"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 82,
            "question_type": "multiple_choice",
            "question_description": "다음 중 IPv6 주소 체계에 대한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "128비트 주소 체계를 사용한다.",
                "2": "유니캐스트, 멀티캐스트, 애니캐스트의 3가지 주소 유형을 지원한다.",
                "3": "주소의 확장으로 라우터의 부하가 감소한다.",
                "4": "인증 및 보안 기능을 제공한다."
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 83,
            "question_type": "multiple_choice",
            "question_description": "다음 중 네트워크 장비에 대한 설명으로 옳지 않은 것은?",
            "additional_content": null,
            "choices": {
                "1": "라우터(Router): 서로 다른 네트워크 간에 데이터를 전송하는 장비이다.",
                "2": "허브(Hub): 여러 대의 컴퓨터를 연결하여 네트워크를 구성하는 장비이다.",
                "3": "브리지(Bridge): LAN과 LAN을 연결하여 네트워크를 확장하는 장비이다.",
                "4": "게이트웨이(Gateway): 동일한 네트워크 내에서 데이터를 전송하는 장비이다."
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 84,
            "question_type": "multiple_choice",
            "question_description": "다음 중 네트워크 프로토콜의 기능으로 옳지 않은 것은?",
            "additional_content": null,
            "choices": {
                "1": "데이터 형식 정의",
                "2": "오류 제어",
                "3": "흐름 제어",
                "4": "데이터 암호화"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 85,
            "question_type": "multiple_choice",
            "question_description": "다음 중 네트워크 보안 기술에 대한 설명으로 옳지 않은 것은?",
            "additional_content": null,
            "choices": {
                "1": "방화벽(Firewall): 외부 네트워크로부터 내부 네트워크를 보호하는 시스템이다.",
                "2": "침입 탐지 시스템(IDS): 네트워크의 비정상적인 행위를 탐지하여 관리자에게 알리는 시스템이다.",
                "3": "VPN(Virtual Private Network): 공중망을 이용하여 사설망처럼 안전하게 통신할 수 있도록 하는 기술이다.",
                "4": "DoS(Denial of Service) 공격: 특정 시스템에 과도한 트래픽을 발생시켜 시스템의 정상적인 서비스를 방해하는 공격이다."
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 86,
            "question_type": "multiple_choice",
            "question_description": "다음 중 네트워크 토폴로지에 대한 설명으로 옳지 않은 것은?",
            "additional_content": null,
            "choices": {
                "1": "버스형(Bus): 하나의 통신 회선에 여러 노드가 연결된 형태이다.",
                "2": "링형(Ring): 각 노드가 인접한 노드와 연결되어 원형을 이루는 형태이다.",
                "3": "스타형(Star): 중앙 허브에 모든 노드가 연결된 형태이다.",
                "4": "메시형(Mesh): 모든 노드가 다른 모든 노드와 직접 연결된 형태이다."
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 87,
            "question_type": "multiple_choice",
            "question_description": "다음 중 네트워크 관리 시스템(NMS)의 기능으로 옳지 않은 것은?",
            "additional_content": null,
            "choices": {
                "1": "장애 관리",
                "2": "성능 관리",
                "3": "보안 관리",
                "4": "데이터베이스 설계"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 88,
            "question_type": "multiple_choice",
            "question_description": "다음 중 네트워크 프로토콜의 계층별 기능에 대한 설명으로 옳지 않은 것은?",
            "additional_content": null,
            "choices": {
                "1": "물리 계층(Physical Layer): 비트 단위의 데이터를 전송한다.",
                "2": "데이터 링크 계층(Data Link Layer): 프레임 단위의 데이터를 전송한다.",
                "3": "네트워크 계층(Network Layer): 패킷 단위의 데이터를 전송한다.",
                "4": "전송 계층(Transport Layer): 세션 단위의 데이터를 전송한다."
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 89,
            "question_type": "multiple_choice",
            "question_description": "다음 중 네트워크 장비의 종류와 기능에 대한 설명으로 옳지 않은 것은?",
            "additional_content": null,
            "choices": {
                "1": "리피터(Repeater): 신호를 증폭하여 전송 거리를 확장한다.",
                "2": "브리지(Bridge): MAC 주소를 이용하여 데이터를 필터링하고 전달한다.",
                "3": "라우터(Router): IP 주소를 이용하여 데이터를 라우팅한다.",
                "4": "게이트웨이(Gateway): 동일한 프로토콜을 사용하는 네트워크 간에 데이터를 전송한다."
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 90,
            "question_type": "multiple_choice",
            "question_description": "다음 중 네트워크 보안 공격 유형에 대한 설명으로 옳지 않은 것은?",
            "additional_content": null,
            "choices": {
                "1": "스니핑(Sniffing): 네트워크 상의 데이터를 엿듣는 행위이다.",
                "2": "스푸핑(Spoofing): IP 주소를 위조하여 다른 시스템인 것처럼 속이는 행위이다.",
                "3": "피싱(Phishing): 가짜 웹사이트를 이용하여 사용자 정보를 탈취하는 행위이다.",
                "4": "웜(Worm): 스스로 복제하여 네트워크를 통해 확산되는 악성 코드이다."
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 91,
            "question_type": "multiple_choice",
            "question_description": "다음 중 네트워크 프로토콜의 계층별 기능에 대한 설명으로 옳지 않은 것은?",
            "additional_content": null,
            "choices": {
                "1": "응용 계층(Application Layer): 사용자에게 서비스를 제공한다.",
                "2": "표현 계층(Presentation Layer): 데이터의 암호화 및 압축을 수행한다.",
                "3": "세션 계층(Session Layer): 통신 세션을 설정하고 유지한다.",
                "4": "전송 계층(Transport Layer): 물리적인 연결을 설정하고 유지한다."
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 92,
            "question_type": "multiple_choice",
            "question_description": "다음 중 네트워크 장비의 종류와 기능에 대한 설명으로 옳지 않은 것은?",
            "additional_content": null,
            "choices": {
                "1": "스위치(Switch): MAC 주소를 이용하여 데이터를 필터링하고 전달한다.",
                "2": "라우터(Router): IP 주소를 이용하여 데이터를 라우팅한다.",
                "3": "방화벽(Firewall): 네트워크 트래픽을 감시하고 제어한다.",
                "4": "모뎀(Modem): 디지털 신호를 아날로그 신호로 변환하여 전송한다."
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 93,
            "question_type": "multiple_choice",
            "question_description": "다음 중 네트워크 보안 기술에 대한 설명으로 옳지 않은 것은?",
            "additional_content": null,
            "choices": {
                "1": "SSL/TLS: 웹 브라우저와 서버 간의 안전한 통신을 제공한다.",
                "2": "IPSec: IP 계층에서 보안 기능을 제공한다.",
                "3": "SSH: 원격 호스트에 안전하게 접속할 수 있도록 한다.",
                "4": "WPA2: 무선 LAN의 보안을 강화하는 기술이다."
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 94,
            "question_type": "multiple_choice",
            "question_description": "다음 중 네트워크 프로토콜의 계층별 기능에 대한 설명으로 옳지 않은 것은?",
            "additional_content": null,
            "choices": {
                "1": "물리 계층(Physical Layer): 비트 단위의 데이터를 전송한다.",
                "2": "데이터 링크 계층(Data Link Layer): 프레임 단위의 데이터를 전송한다.",
                "3": "네트워크 계층(Network Layer): 패킷 단위의 데이터를 전송한다.",
                "4": "전송 계층(Transport Layer): 세션 단위의 데이터를 전송한다."
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 95,
            "question_type": "multiple_choice",
            "question_description": "다음 중 네트워크 장비의 종류와 기능에 대한 설명으로 옳지 않은 것은?",
            "additional_content": null,
            "choices": {
                "1": "리피터(Repeater): 신호를 증폭하여 전송 거리를 확장한다.",
                "2": "브리지(Bridge): MAC 주소를 이용하여 데이터를 필터링하고 전달한다.",
                "3": "라우터(Router): IP 주소를 이용하여 데이터를 라우팅한다.",
                "4": "게이트웨이(Gateway): 동일한 프로토콜을 사용하는 네트워크 간에 데이터를 전송한다."
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 96,
            "question_type": "multiple_choice",
            "question_description": "다음 중 네트워크 보안 공격 유형에 대한 설명으로 옳지 않은 것은?",
            "additional_content": null,
            "choices": {
                "1": "스니핑(Sniffing): 네트워크 상의 데이터를 엿듣는 행위이다.",
                "2": "스푸핑(Spoofing): IP 주소를 위조하여 다른 시스템인 것처럼 속이는 행위이다.",
                "3": "피싱(Phishing): 가짜 웹사이트를 이용하여 사용자 정보를 탈취하는 행위이다.",
                "4": "웜(Worm): 스스로 복제하여 네트워크를 통해 확산되는 악성 코드이다."
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 97,
            "question_type": "multiple_choice",
            "question_description": "다음 중 네트워크 프로토콜의 계층별 기능에 대한 설명으로 옳지 않은 것은?",
            "additional_content": null,
            "choices": {
                "1": "응용 계층(Application Layer): 사용자에게 서비스를 제공한다.",
                "2": "표현 계층(Presentation Layer): 데이터의 암호화 및 압축을 수행한다.",
                "3": "세션 계층(Session Layer): 통신 세션을 설정하고 유지한다.",
                "4": "전송 계층(Transport Layer): 물리적인 연결을 설정하고 유지한다."
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 98,
            "question_type": "multiple_choice",
            "question_description": "NS(Nassi-Schneiderman) chart에 대한 설명으로 거리가 먼 것은?",
            "additional_content": null,
            "choices": {
                "1": "논리의 기술에 중점을 둔 도형식 표현 방법이다.",
                "2": "연속, 선택 및 다중 선택, 반복 등의 제어논리 구조로 표현한다.",
                "3": "주로 화살표를 사용하여 논리적인 제어구조로 흐름을 표현한다.",
                "4": "조건이 복합되어 있는 곳의 처리를 시각적으로 명확히 식별하는데 적합하다."
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 99,
            "question_type": "multiple_choice",
            "question_description": "다음 내용에 적합한 용어는?",
            "additional_content": "**설명:**\n\n• 대용량 데이터를 분산 처리하기 위한 목적으로 개발된 프로그래밍 모델이다.\n• Google에 의해 고안된 기술로써 대표적인 대용량 데이터 처리를 위한 병렬 처리 기법을 제공한다.\n• 임의의 순서로 정렬된 데이터를 분산 처리하고 이를 다시 합치는 과정을 거친다.",
            "choices": {
                "1": "MapReduce",
                "2": "SQL",
                "3": "Hijacking",
                "4": "Logs"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 100,
            "question_type": "multiple_choice",
            "question_description": "소프트웨어 프로세스에 대한 개선 및 능력 측정 기준에 대한 국제 표준은?",
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
};
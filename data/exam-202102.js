const EXAM_DATA_202102 = {
    "year": "2021",
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
            "question_description": "요구사항 관리 도구가 필요한 이유가 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "비용 대비 효과 분석",
                "2": "시스템 간 성능 비교",
                "3": "변경 사항 추적",
                "4": "영향도 분석"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 2,
            "question_type": "multiple_choice",
            "question_description": "GoF(Gangs of Four) 디자인 패턴에 대한 설명 중 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "Factory Method 패턴은 객체 생성의 책임을 서브클래스에 위임한다.",
                "2": "Prototype 패턴은 기존 객체를 복사하여 새로운 객체를 생성한다.",
                "3": "Bridge 패턴은 구현부에서 추상층을 분리하여 독립적으로 변형할 수 있게 한다.",
                "4": "Mediator 패턴은 객체들 간의 상호작용을 캡슐화하여 객체 간의 결합도를 높인다."
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 3,
            "question_type": "multiple_choice",
            "question_description": "애자일 개발 방법론이 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "Scrum",
                "2": "eXtreme Programming(XP)",
                "3": "Feature Driven Development(FDD)",
                "4": "Hadoop"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 4,
            "question_type": "multiple_choice",
            "question_description": "유스케이스(Usecase)에 대한 설명으로 옳은 것은?",
            "additional_content": null,
            "choices": {
                "1": "유스케이스 다이어그램은 개발자의 요구사항을 명확히 하기 위해 사용한다.",
                "2": "액터(Actor)는 시스템과 상호작용하는 역할을 의미한다.",
                "3": "사용자 액터는 연동되는 시스템을 의미한다.",
                "4": "연동(Interlocking)은 시스템 간의 상호작용을 의미한다."
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 5,
            "question_type": "multiple_choice",
            "question_description": "CASE(Computer Aided Software Engineering)의 핵심 기술이 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "구조적 기법",
                "2": "프로토타이핑 기술",
                "3": "정보 저장소 기술",
                "4": "일괄 처리 기술"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 6,
            "question_type": "multiple_choice",
            "question_description": "럼바우(Rumbaugh)의 객체지향 분석에서 사용하는 분석 활동으로 옳은 것은?",
            "additional_content": null,
            "choices": {
                "1": "객체 모델링, 동적 모델링, 기능 모델링",
                "2": "정적 모델링, 동적 모델링, 기능 모델링",
                "3": "객체 모델링, 정적 모델링, 기능 모델링",
                "4": "객체 모델링, 동적 모델링, 정적 모델링"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 7,
            "question_type": "multiple_choice",
            "question_description": "UML 모델에서 한 객체가 다른 객체에 대해 연산을 수행한다는 의미적 관계를 명시하는 것은?",
            "additional_content": null,
            "choices": {
                "1": "의존성(Dependency)",
                "2": "실현(Realization)",
                "3": "일반화(Generalization)",
                "4": "연관(Association)"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 8,
            "question_type": "multiple_choice",
            "question_description": "시스템의 구성 요소로 볼 수 없는 것은?",
            "additional_content": null,
            "choices": {
                "1": "프로세스",
                "2": "피드백",
                "3": "유지보수",
                "4": "제어"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 9,
            "question_type": "multiple_choice",
            "question_description": "사용자 인터페이스(UI)의 특징 중 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "사용자의 오류를 최소화한다.",
                "2": "편의성을 높여 작업 시간을 증가시킨다.",
                "3": "모호한 기능에 대해 구체적인 방법을 제공한다.",
                "4": "사용자 중심의 상호작용을 보장한다."
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 10,
            "question_type": "multiple_choice",
            "question_description": "요구사항 개발 프로세스의 올바른 순서는?",
            "additional_content": "**요구사항 개발 단계:**\n\n㉠ 요구사항 도출(Elicitation)\n㉡ 요구사항 명세(Specification)\n㉢ 요구사항 분석(Analysis)\n㉣ 요구사항 검증(Validation)",
            "choices": {
                "1": "㉠ → ㉡ → ㉢ → ㉣",
                "2": "㉠ → ㉢ → ㉡ → ㉣",
                "3": "㉠ → ㉡ → ㉣ → ㉢",
                "4": "㉠ → ㉢ → ㉣ → ㉡"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 11,
            "question_type": "multiple_choice",
            "question_description": "요구사항 분석이 어려운 이유가 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "개발자와 사용자 간의 지식과 표현의 차이",
                "2": "사용자 요구사항에 예외가 적어 열거와 구조화가 어렵지 않음",
                "3": "사용자 요구사항이 모호하고 불명확함",
                "4": "개발 과정에서 요구사항이 지속적으로 변경됨"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 12,
            "question_type": "multiple_choice",
            "question_description": "소프트웨어 아키텍처 설계에서 시스템 품질 속성이 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "가용성",
                "2": "격리성",
                "3": "수정성",
                "4": "사용성"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 13,
            "question_type": "multiple_choice",
            "question_description": "하위 시스템이 반복적으로 입력 데이터를 받아 처리한 후 그 결과를 다른 시스템으로 전송하는 아키텍처 스타일은?",
            "additional_content": null,
            "choices": {
                "1": "클라이언트-서버 구조",
                "2": "계층 구조",
                "3": "MVC 구조",
                "4": "파이프-필터 구조"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 14,
            "question_type": "multiple_choice",
            "question_description": "객체지향 기법에서 같은 클래스에 속한 각각의 객체를 의미하는 것은?",
            "additional_content": null,
            "choices": {
                "1": "Instance",
                "2": "Message",
                "3": "Method",
                "4": "Module"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 15,
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
            "question_number": 16,
            "question_type": "multiple_choice",
            "question_description": "상위 CASE 도구가 지원하는 주요 기능으로 볼 수 없는 것은?",
            "additional_content": null,
            "choices": {
                "1": "모델들 사이의 모순검사 기능",
                "2": "전체 소스 코드 생성 기능",
                "3": "모델의 오류검증 기능",
                "4": "자료 흐름도 작성 기능"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 17,
            "question_type": "multiple_choice",
            "question_description": "다음 설명에 해당하는 시스템으로 옳은 것은?",
            "additional_content": "**설명:**\n\n시스템 인터페이스를 구성하는 시스템으로, 연계할 데이터를 데이터베이스와 애플리케이션으로부터 연계 테이블 또는 파일 형태로 생성하며 송신하는 시스템이다.",
            "choices": {
                "1": "연계 서버",
                "2": "중계 서버",
                "3": "송신 시스템",
                "4": "수신 시스템"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 18,
            "question_type": "multiple_choice",
            "question_description": "UML 다이어그램이 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "액티비티 다이어그램",
                "2": "절차 다이어그램",
                "3": "클래스 다이어그램",
                "4": "시퀀스 다이어그램"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 19,
            "question_type": "multiple_choice",
            "question_description": "객체에게 어떤 행위를 하도록 지시하는 명령은?",
            "additional_content": null,
            "choices": {
                "1": "Class",
                "2": "Package",
                "3": "Object",
                "4": "Message"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 20,
            "question_type": "multiple_choice",
            "question_description": "객체지향 설계에서 객체가 가지고 있는 속성과 오퍼레이션의 일부를 감추어서 객체의 외부에서는 접근이 불가능하게 하는 개념은?",
            "additional_content": null,
            "choices": {
                "1": "조직화",
                "2": "캡슐화",
                "3": "정보 은닉",
                "4": "구조화"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 21,
            "question_type": "multiple_choice",
            "question_description": "클린 코드 작성원칙에 대한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "코드의 중복을 최소화 한다.",
                "2": "코드가 다른 모듈에 미치는 영향을 최대화하도록 작성한다.",
                "3": "누구든지 코드를 쉽게 읽을 수 있도록 작성한다.",
                "4": "간단하게 코드를 작성한다."
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 22,
            "question_type": "multiple_choice",
            "question_description": "소프트웨어 형상 관리에 대한 설명으로 거리가 먼 것은?",
            "additional_content": null,
            "choices": {
                "1": "소프트웨어에 가해지는 변경을 제어하고 관리한다.",
                "2": "프로젝트 계획, 분석서, 설계서, 프로그램, 테스트 케이스 모두 관리 대상이다.",
                "3": "대표적인 형상관리 도구로 Ant, Maven, Gradle 등이 있다.",
                "4": "유지 보수 단계뿐만 아니라 개발 단계에도 적용할 수 있다."
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 23,
            "question_type": "multiple_choice",
            "question_description": "EAI(Enterprise Application Integration) 구축 유형에서 애플리케이션 사이에 미들웨어를 두어 처리하는 것은?",
            "additional_content": null,
            "choices": {
                "1": "Message Bus",
                "2": "Point-to-point",
                "3": "Hub & Spoke",
                "4": "Hybrid"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 24,
            "question_type": "multiple_choice",
            "question_description": "소프트웨어 패키징에 대한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "패키징은 개발자 중심으로 진행한다.",
                "2": "신규 및 변경 개발소스를 식별하고, 이를 모듈화하여 상용제품으로 패키징 한다.",
                "3": "고객의 편의성을 위해 매뉴얼 및 버전관리를 지속적으로 한다.",
                "4": "범용 환경에서 사용이 가능하도록 일반적인 배포 형태로 패키징이 진행된다."
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 25,
            "question_type": "multiple_choice",
            "question_description": "애플리케이션의 처리량, 응답 시간, 경과 시간, 자원 사용들에 대해 가상의 사용자를 생성하고 테스트를 수행함으로써 성능 목표를 달성하였는지를 확인하는 테스트 자동화 도구는?",
            "additional_content": null,
            "choices": {
                "1": "명세 기반 테스트 설계 도구",
                "2": "코드 기반 테스트 설계 도구",
                "3": "기능 테스트 수행 도구",
                "4": "성능 테스트 도구"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 26,
            "question_type": "multiple_choice",
            "question_description": "디지털 저작권 관리(DRM) 구성 요소가 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "Dataware House",
                "2": "DRM Controller",
                "3": "Packager",
                "4": "Contents Distributor"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 27,
            "question_type": "multiple_choice",
            "question_description": "다음 설명의 소프트웨어 테스트의 기본원칙은?",
            "additional_content": "**설명:**\n\n• 파레토 법칙이 좌우한다.\n• 애플리케이션 결함의 대부분은 소수의 특정한 모듈에 집중되어 존재한다.\n• 결함은 발생한 모듈에서 계속 추가로 발생할 가능성이 높다.",
            "choices": {
                "1": "살충제 패러독스",
                "2": "결함 집중",
                "3": "오류 부재의 궤변",
                "4": "완벽한 테스팅은 불가능"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 28,
            "question_type": "multiple_choice",
            "question_description": "다음 자료를 버블 정렬을 이용하여 오름차순으로 정렬할 경우 Pass 2의 결과는?",
            "additional_content": "**초기 데이터:** `9, 6, 7, 3, 5`\n\n**버블 정렬 과정:**\n- Pass 1: 9, 6, 7, 3, 5 → 6, 7, 3, 5, 9\n- Pass 2: 6, 7, 3, 5, 9 → 6, 3, 5, 7, 9",
            "choices": {
                "1": "3, 5, 6, 7, 9",
                "2": "6, 7, 3, 5, 9",
                "3": "3, 5, 9, 6, 7",
                "4": "6, 3, 5, 7, 9"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 29,
            "question_type": "multiple_choice",
            "question_description": "다음 설명의 소프트웨어 버전 관리 도구 방식은?",
            "additional_content": "**설명:**\n\n• 버전 관리 자료가 원격 저장소와 로컬 저장소에 함께 저장되어 관리된다.\n• 로컬 저장소에서 버전 관리가 가능하므로 원격 저장소에 문제가 생겨도 로컬 저장소의 자료를 이용하여 작업할 수 있다.\n• 대표적인 버전 관리 도구로 Git이 있다.",
            "choices": {
                "1": "단일 저장소 방식",
                "2": "분산 저장소 방식",
                "3": "공유 폴더 방식",
                "4": "클라이언트-서버 방식"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 30,
            "question_type": "multiple_choice",
            "question_description": "인터페이스 구현 검증 도구가 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "Foxbase",
                "2": "STAF",
                "3": "watir",
                "4": "xUnit"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 31,
            "question_type": "multiple_choice",
            "question_description": "정렬된 N개의 데이터를 처리하는 데 O(NlogN)의 시간이 소요되는 정렬 알고리즘은?",
            "additional_content": null,
            "choices": {
                "1": "합병 정렬",
                "2": "버블 정렬",
                "3": "선택 정렬",
                "4": "삽입 정렬"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 32,
            "question_type": "multiple_choice",
            "question_description": "블랙박스 테스트로 발견할 수 없는 오류는?",
            "additional_content": null,
            "choices": {
                "1": "비정상적인 데이터가 입력되어도 오류 처리가 수행되지 않는 경우",
                "2": "정상적인 데이터가 입력되어도 요구된 기능이 제대로 수행되지 않는 경우",
                "3": "반복문 조건이 만족되어도 반복문 내의 문장이 실행되지 않는 경우",
                "4": "경계값이 입력되어도 요구된 출력이 나오지 않는 경우"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 33,
            "question_type": "multiple_choice",
            "question_description": "소프트웨어 테스트에 대한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "화이트박스 테스트는 모듈의 논리적 구조를 체계적으로 검사할 수 있다.",
                "2": "블랙박스 테스트는 프로그램의 구조를 고려하지 않는다.",
                "3": "테스트 케이스는 일반적으로 테스트 조건, 테스트 데이터, 예상 결과를 포함한다.",
                "4": "화이트박스 테스트에서 Basis Path는 흐름 그래프의 시작 노드에서 종료 노드까지의 독립적인 경로로, 사이클을 허용하지 않는다."
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 34,
            "question_type": "multiple_choice",
            "question_description": "잘 설계된 소프트웨어에 대한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "소프트웨어는 유지보수가 용이해야 한다.",
                "2": "소프트웨어는 높은 신뢰성을 가져야 한다.",
                "3": "소프트웨어는 사용자 수준에 관계없이 일관된 인터페이스를 제공해야 한다.",
                "4": "소프트웨어는 충분한 테스트를 거쳐야 한다."
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 35,
            "question_type": "multiple_choice",
            "question_description": "단위 테스트로 발견할 수 없는 오류는?",
            "additional_content": null,
            "choices": {
                "1": "알고리즘 오류로 인한 바람직하지 않은 결과",
                "2": "무한 루프의 사용",
                "3": "모듈 간의 비정상적인 상호작용으로 인한 바람직하지 않은 결과",
                "4": "잘못된 계산식으로 인한 잘못된 결과"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 36,
            "question_type": "multiple_choice",
            "question_description": "힙 정렬(Heap Sort)에 대한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "입력 레코드로부터 힙을 반복적으로 구성하고 가장 큰 키 값을 가진 루트 노드를 제거하는 정렬 기법이다.",
                "2": "평균 실행 시간은 O(nlogn)이다.",
                "3": "입력 데이터 레코드를 완전 이진 트리로 구성한다.",
                "4": "최악의 경우 실행 시간은 O(2n)이다."
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 37,
            "question_type": "multiple_choice",
            "question_description": "버전 관리 항목 중 저장소에 새로운 버전의 파일을 업데이트하는 것을 의미하는 용어는?",
            "additional_content": null,
            "choices": {
                "1": "형상 감사",
                "2": "롤백",
                "3": "단위 테스트",
                "4": "체크인"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 38,
            "question_type": "multiple_choice",
            "question_description": "테스트와 디버깅의 올바른 목적은?",
            "additional_content": null,
            "choices": {
                "1": "테스트는 오류를 찾는 작업이고, 디버깅은 오류를 수정하는 작업이다.",
                "2": "테스트는 오류를 수정하는 작업이고, 디버깅은 오류를 찾는 작업이다.",
                "3": "둘 다 소프트웨어 오류를 찾는 작업이며, 오류 수정과는 무관하다.",
                "4": "둘 다 소프트웨어 오류 찾기와 수정과는 무관하다."
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 39,
            "question_type": "multiple_choice",
            "question_description": "다음 후위 표기식의 올바른 결과는?",
            "additional_content": "**후위 표기식:** `3 4 5 6 + *`\n\n**계산 과정:**\n1. 3 4 5 6 + *\n2. 3 4 11 * (5+6=11)\n3. 3 44 (4×11=44)\n4. 132 (3×44=132)",
            "choices": {
                "1": "35",
                "2": "42",
                "3": "81",
                "4": "132"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 40,
            "question_type": "multiple_choice",
            "question_description": "스택을 사용한 연산과 가장 거리가 먼 것은?",
            "additional_content": null,
            "choices": {
                "1": "선택 정렬",
                "2": "재귀 호출",
                "3": "후위 표기식 평가",
                "4": "깊이 우선 탐색"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 41,
            "question_type": "multiple_choice",
            "question_description": "릴레이션 R의 차수가 40이고 카디널리티가 50이며, 릴레이션 S의 차수가 6이고 카디널리티가 7일 때, 두 릴레이션의 카티션 곱으로 생성되는 새로운 릴레이션의 차수와 카디널리티는?",
            "additional_content": null,
            "choices": {
                "1": "24, 35",
                "2": "24, 12",
                "3": "46, 350",
                "4": "46, 12"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 42,
            "question_type": "multiple_choice",
            "question_description": "시스템 카탈로그에 대한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "사용자가 데이터베이스 무결성을 유지하기 위해 시스템 카탈로그의 내용을 직접 갱신한다.",
                "2": "시스템 자체가 필요로 하는 스키마와 다양한 객체에 대한 정보를 포함하는 시스템 데이터베이스이다.",
                "3": "시스템 카탈로그에 저장된 내용을 메타데이터라고도 한다.",
                "4": "시스템 카탈로그는 DBMS 자체에 의해 생성되고 유지된다."
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 43,
            "question_type": "multiple_choice",
            "question_description": "순수 관계 대수 연산자가 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "차집합",
                "2": "프로젝션",
                "3": "조인",
                "4": "나눗셈"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 44,
            "question_type": "multiple_choice",
            "question_description": "데이터베이스 설계의 물리적 설계 단계에서 수행되지 않는 것은?",
            "additional_content": null,
            "choices": {
                "1": "레코드 집중도 분석 및 설계",
                "2": "접근 경로 설계",
                "3": "저장 레코드 형식 설계",
                "4": "대상 DBMS에 적합한 스키마 설계"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 45,
            "question_type": "multiple_choice",
            "question_description": "테이블 R1, R2로부터 다음 실행 결과를 얻기 위해 필요한 SQL문은?",
            "additional_content": "**실행 결과:**\n| 과목번호 | 과목이름 |\n|----------|----------|\n| C100 | 컴퓨터구조 |\n| C200 | 데이터베이스 |\n\n**[R1] 테이블:**\n| 학번 | 이름 | 학년 | 학과 | 주소 |\n|------|------|------|------|------|\n| 1000 | 홍길동 | 1 | 컴퓨터공학 | 서울 |\n| 2000 | 김철수 | 1 | 전기공학 | 경기 |\n| 3000 | 강남길 | 2 | 전자공학 | 경기 |\n| 4000 | 오말자 | 2 | 컴퓨터공학 | 경기 |\n| 5000 | 장미화 | 3 | 전자공학 | 서울 |\n\n**[R2] 테이블:**\n| 학번 | 과목번호 | 과목이름 | 성적 | 점수 |\n|------|----------|----------|------|------|\n| 1000 | C100 | 컴퓨터구조 | A | 91 |\n| 2000 | C200 | 데이터베이스 | A+ | 99 |\n| 3000 | C100 | 컴퓨터구조 | B+ | 89 |\n| 3000 | C200 | 데이터베이스 | B | 85 |\n| 4000 | C200 | 데이터베이스 | A | 93 |\n| 4000 | C300 | 운영체제 | B | 88 |\n| 5000 | C300 | 운영체제 | B | 82 |",
            "choices": {
                "1": "SELECT DISTINCT 과목번호, 과목이름 FROM R2 WHERE 과목번호 IN ('C100', 'C200')",
                "2": "SELECT 과목번호, 과목이름 FROM R2 GROUP BY 과목번호, 과목이름",
                "3": "SELECT 과목번호, 과목이름 FROM R2 ORDER BY 과목번호",
                "4": "SELECT 과목번호, 과목이름 FROM R2 WHERE 과목번호 = 'C100' OR 과목번호 = 'C200'"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 46,
            "question_type": "multiple_choice",
            "question_description": "병행제어 기법의 종류가 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "로킹 기법",
                "2": "시분할 기법",
                "3": "타임스탬프 기법",
                "4": "다중 버전 기법"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 47,
            "question_type": "multiple_choice",
            "question_description": "SQL문에서 SELECT에 대한 설명으로 옳지 않은 것은?",
            "additional_content": null,
            "choices": {
                "1": "FROM 절에는 질의에 의해 검색될 데이터를 포함하는 테이블명을 기술한다.",
                "2": "검색결과에 중복되는 레코드를 없애기 위해서는 WHERE 절에 'DISTINCT' 키워드를 사용한다.",
                "3": "HAVING 절은 GROUP BY 절과 함께 사용되며, 그룹에 대한 조건을 지정한다.",
                "4": "ORDER BY 절은 특정 속성을 기준으로 정렬하여 검색할 때 사용한다."
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 48,
            "question_type": "multiple_choice",
            "question_description": "제3정규형(3NF)에서 BCNF(Boyce-Codd Normal Form)가 되기 위한 조건은?",
            "additional_content": null,
            "choices": {
                "1": "결정자가 후보키가 아닌 함수 종속 제거",
                "2": "이행적 함수 종속 제거",
                "3": "부분 함수 종속 제거",
                "4": "원자값이 아닌 도메인 분해"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 49,
            "question_type": "multiple_choice",
            "question_description": "SQL에서 VIEW를 삭제할 때 사용하는 명령어는?",
            "additional_content": null,
            "choices": {
                "1": "ERASE",
                "2": "KILL",
                "3": "DROP",
                "4": "DELETE"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 50,
            "question_type": "multiple_choice",
            "question_description": "트랜잭션의 실행이 실패하였음을 알리는 연산자로, 트랜잭션이 수행한 결과를 원래의 상태로 원상 복귀 시키는 연산은?",
            "additional_content": null,
            "choices": {
                "1": "COMMIT 연산",
                "2": "BACKUP 연산",
                "3": "LOG 연산",
                "4": "ROLLBACK 연산"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 51,
            "question_type": "multiple_choice",
            "question_description": "DDL(Data Definition Language)의 명령어 중 스키마, 도메인, 인덱스 등을 정의할 때 사용하는 SQL문은?",
            "additional_content": null,
            "choices": {
                "1": "ALTER",
                "2": "SELECT",
                "3": "CREATE",
                "4": "INSERT"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 52,
            "question_type": "multiple_choice",
            "question_description": "데이터 속성 간의 종속성에 대한 엄밀한 고려없이 잘못 설계된 데이터베이스에서는 데이터 처리 연산 수행 시 각종 이상 현상이 발생할 수 있는데, 이러한 이상 현상이 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "검색이상",
                "2": "삽입이상",
                "3": "삭제이상",
                "4": "갱신이상"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 53,
            "question_type": "multiple_choice",
            "question_description": "테이블 R1, R2에 대하여 다음 SQL문의 결과는?",
            "additional_content": "**SQL문:**\n```sql\n(SELECT 학번 FROM R1)\nINTERSECT\n(SELECT 학번 FROM R2)\n```\n\n**[R1] 테이블:**\n| 학번 | 학점수 |\n|------|--------|\n| 20201111 | 15 |\n| 20202222 | 20 |\n\n**[R2] 테이블:**\n| 학번 | 과목번호 |\n|------|----------|\n| 20202222 | CS200 |\n| 20203333 | CS300 |",
            "choices": {
                "1": "| 학번 | 학점수 | 과목번호 |\n|------|--------|----------|\n| 20202222 | 20 | CS200 |",
                "2": "| 학번 |\n|------|\n| 20202222 |",
                "3": "| 학번 |\n|------|\n| 20201111 |\n| 20202222 |\n| 20203333 |",
                "4": "| 학번 | 학점수 | 과목번호 |\n|------|--------|----------|\n| 20201111 | 15 | NULL |\n| 20202222 | 20 | CS200 |\n| 20203333 | NULL | CS300 |"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 54,
            "question_type": "multiple_choice",
            "question_description": "관계 데이터베이스 모델에서 차수(Degree)의 의미는?",
            "additional_content": null,
            "choices": {
                "1": "튜플의 수",
                "2": "테이블의 수",
                "3": "데이터베이스의 수",
                "4": "애트리뷰트의 수"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 55,
            "question_type": "multiple_choice",
            "question_description": "다음 SQL 문에서 ( ) 안에 들어갈 내용으로 옳은 것은?",
            "additional_content": "**SQL문:**\n```sql\nUPDATE 인사급여 ( ) 호봉 = 15\nWHERE 성명 = '홍길동';\n```",
            "choices": {
                "1": "SET",
                "2": "FROM",
                "3": "INTO",
                "4": "IN"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 56,
            "question_type": "multiple_choice",
            "question_description": "병렬 데이터베이스 환경 중 수평 분할에서 활용되는 분할 기법이 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "라운드-로빈",
                "2": "범위 분할",
                "3": "예측 분할",
                "4": "해시 분할"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 57,
            "question_type": "multiple_choice",
            "question_description": "관계형 데이터 모델의 릴레이션에 대한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "모든 속성 값은 원자 값을 갖는다.",
                "2": "한 릴레이션에 포함된 튜플은 모두 상이하다.",
                "3": "한 릴레이션에 포함된 튜플 사이에는 순서가 없다.",
                "4": "한 릴레이션을 구성하는 속성 사이에는 순서가 존재한다."
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 58,
            "question_type": "multiple_choice",
            "question_description": "속성(attribute)에 대한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "속성은 개체의 특성을 기술한다.",
                "2": "속성은 데이터베이스를 구성하는 가장 작은 논리적 단위이다.",
                "3": "속성은 파일 구조상 데이터 항목 또는 데이터 필드에 해당된다.",
                "4": "속성의 수를 'cardinality'라고 한다."
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 59,
            "question_type": "multiple_choice",
            "question_description": "릴레이션에서 기본키를 구성하는 속성들이 널 값을 가지거나 중복된 값을 가질 수 없다는 무결성 제약조건은?",
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
            "category_id": 3,
            "question_number": 60,
            "question_type": "multiple_choice",
            "question_description": "개체-관계 모델(E-R Model)에서 틀린 그래픽 표현은?",
            "additional_content": null,
            "choices": {
                "1": "개체 타입 - 사각형",
                "2": "속성 - 원",
                "3": "관계 타입 - 마름모",
                "4": "연결 - 삼각형"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 61,
            "question_type": "multiple_choice",
            "question_description": "페이징 기법에서 페이지 크기가 작아짐에 따라 발생하지 않는 현상은?",
            "additional_content": null,
            "choices": {
                "1": "메모리 이용 효율이 증가한다.",
                "2": "입출력 시간이 증가한다.",
                "3": "내부 단편화가 감소한다.",
                "4": "페이지 맵 테이블 크기가 감소한다."
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 62,
            "question_type": "multiple_choice",
            "question_description": "다음 C 프로그램을 실행했을 때의 결과는?",
            "additional_content": "**C 프로그램:**\n```c\n#include <stdio.h>\nint main(int argc, char *argv[]) {\n    int a = 4;\n    int b = 7;\n    int c = a | b;\n    printf(\"%d\", c);\n    return 0;\n}\n```",
            "choices": {
                "1": "3",
                "2": "4",
                "3": "7",
                "4": "7"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 63,
            "question_type": "multiple_choice",
            "question_description": "다음 Python 프로그램을 실행했을 때의 결과는?",
            "additional_content": "**Python 프로그램:**\n```python\nclass FourCal:\n    def setdata(self, fir, sec):\n        self.fir = fir\n        self.sec = sec\n    def add(self):\n        result = self.fir + self.sec\n        return result\na = FourCal()\na.setdata(4, 2)\nprint(a.add())\n```",
            "choices": {
                "1": "0",
                "2": "2",
                "3": "4",
                "4": "6"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 64,
            "question_type": "multiple_choice",
            "question_description": "CIDR 표기법 203.241.132.82/27을 사용할 때 이 주소의 서브넷 마스크는?",
            "additional_content": null,
            "choices": {
                "1": "255.255.255.0",
                "2": "255.255.255.224",
                "3": "255.255.255.240",
                "4": "255.255.255.248"
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
                "1": "송신지에서 최종 목적지까지 패킷을 전달하는 역할을 담당한다.",
                "2": "한 노드에서 다른 노드로 프레임을 전송하는 역할을 담당한다.",
                "3": "패킷에 송신지와 목적지의 논리적 주소를 추가한다.",
                "4": "라우터나 스위치가 패킷 전달을 위한 경로 결정이나 스위칭 기능을 제공한다."
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 66,
            "question_type": "multiple_choice",
            "question_description": "다음 C 프로그램을 실행했을 때의 결과는?",
            "additional_content": "**C 프로그램:**\n```c\n#include <stdio.h>\nint main(int argc, char *argv[]) {\n    char a;\n    a = 'A' + 1;\n    printf(\"%d\", a);\n    return 0;\n}\n```",
            "choices": {
                "1": "1",
                "2": "11",
                "3": "66",
                "4": "66"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 67,
            "question_type": "multiple_choice",
            "question_description": "다음 중 응집도가 가장 강한 것은?",
            "additional_content": null,
            "choices": {
                "1": "순차적 응집도",
                "2": "절차적 응집도",
                "3": "논리적 응집도",
                "4": "우연적 응집도"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 68,
            "question_type": "multiple_choice",
            "question_description": "프레임워크에 대한 설명으로 옳은 것은?",
            "additional_content": null,
            "choices": {
                "1": "소프트웨어 구성에 필요한 기본 구조를 제공하여 재사용성을 가능하게 한다.",
                "2": "소프트웨어 개발 시 구조가 고정되어 확장이 불가능하다.",
                "3": "소프트웨어 아키텍처와 같은 개념이다.",
                "4": "모듈화가 불가능하다."
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 69,
            "question_type": "multiple_choice",
            "question_description": "다음 JAVA 프로그램을 실행했을 때의 결과는?",
            "additional_content": "**JAVA 프로그램:**\n```java\npublic class Operator {\n    public static void main(String[] args) {\n        int x=5, y=0, z=0;\n        y = x++;\n        z = --x;\n        System.out.print(x + \",\" + y + \",\" + z);\n    }\n}\n```",
            "choices": {
                "1": "5,5,5",
                "2": "5,6,5",
                "3": "5,5,5",
                "4": "5,6,4"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 70,
            "question_type": "multiple_choice",
            "question_description": "다음 C 프로그램을 실행했을 때의 결과는?",
            "additional_content": "**C 프로그램:**\n```c\n#include <stdio.h>\nint main(int argc, char *argv[]) {\n    int a[2][2] = {{11, 22}, {44, 55}};\n    int i, sum = 0;\n    int *p;\n    p = a[0];\n    for(i=1; i < 4; i++)\n        sum += *(p + i);\n    printf(\"%d\", sum);\n    return 0;\n}\n```",
            "choices": {
                "1": "55",
                "2": "77",
                "3": "121",
                "4": "132"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 71,
            "question_type": "multiple_choice",
            "question_description": "C 라이브러리 stdlib.h에 대한 설명으로 옳은 것은?",
            "additional_content": null,
            "choices": {
                "1": "문자열을 수치 데이터로 변환하는 함수와 수치 데이터를 문자열로 변환하는 변환 함수들을 포함한다.",
                "2": "strlen()과 같은 문자열 처리 함수들을 포함한다.",
                "3": "표준 입출력 라이브러리이다.",
                "4": "삼각함수, 제곱근, 지수 등의 수학 함수들을 포함한다."
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 72,
            "question_type": "multiple_choice",
            "question_description": "프로세스 적재 정책에 대한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "시간적 지역성(Temporal Locality)은 최근에 참조된 페이지가 다시 참조될 가능성이 높다는 특성이다.",
                "2": "공간적 지역성(Spatial Locality)은 참조된 페이지 근처의 페이지가 곧 참조될 가능성이 높다는 특성이다.",
                "3": "스레싱(Thrashing)은 페이지 부재율이 높아져서 시스템 성능이 급격히 저하되는 현상이다.",
                "4": "워킹셋(Working Set)은 프로세스가 일정 시간 동안 참조한 페이지들의 집합을 의미한다."
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 73,
            "question_type": "multiple_choice",
            "question_description": "은행원 알고리즘(Banker's Algorithm)이 속하는 교착상태 해결 기법은?",
            "additional_content": null,
            "choices": {
                "1": "탐지",
                "2": "회피",
                "3": "복구",
                "4": "예방"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 74,
            "question_type": "multiple_choice",
            "question_description": "다음 중 결합도가 가장 약한 것은?",
            "additional_content": null,
            "choices": {
                "1": "공통 결합도",
                "2": "내용 결합도",
                "3": "외부 결합도",
                "4": "스탬프 결합도"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 75,
            "question_type": "multiple_choice",
            "question_description": "JavaScript에 대한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "프로토타입 기반의 객체지향 언어이다.",
                "2": "클래스 기반 상속을 지원한다.",
                "3": "프로토타입 링크를 통해 객체 간의 상속 관계를 구현한다.",
                "4": "프로토타입 객체를 통해 메서드와 속성을 공유할 수 있다."
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 76,
            "question_type": "multiple_choice",
            "question_description": "C 언어 연산자의 우선순위를 높은 순서대로 올바르게 나열한 것은?",
            "additional_content": "**연산자 우선순위:**\n\n① `()` (괄호)\n② `==` (동등 비교)\n③ `<` (관계 연산자)\n④ `<<` (시프트 연산자)\n⑤ `||` (논리 OR)\n⑥ `&` (비트 AND)\n⑦ `/` (나눗셈)",
            "choices": {
                "1": "① → ⑦ → ④ → ③ → ⑥ → ② → ⑤",
                "2": "① → ⑦ → ④ → ⑥ → ③ → ② → ⑤",
                "3": "① → ⑦ → ⑥ → ④ → ③ → ② → ⑤",
                "4": "① → ⑦ → ④ → ⑥ → ② → ③ → ⑤"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 77,
            "question_type": "multiple_choice",
            "question_description": "다음 Java 프로그램을 실행했을 때의 결과는?",
            "additional_content": "**Java 프로그램:**\n```java\npublic class Test {\n    public static void main(String[] args) {\n        int cnt = 0;\n        do {\n            cnt++;\n        } while (cnt < 0);\n        if(cnt == 1) cnt++;\n        else cnt = cnt + 3;\n        System.out.println(cnt);\n    }\n}\n```",
            "choices": {
                "1": "1",
                "2": "2",
                "3": "3",
                "4": "4"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 78,
            "question_type": "multiple_choice",
            "question_description": "Linux Bash Shell에서 export 명령어에 대한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "변수를 출력하는 용도로 사용한다.",
                "2": "환경 변수를 표시하는 용도로 사용한다.",
                "3": "사용자가 만든 변수의 범위를 전역으로 설정한다.",
                "4": "전역 변수는 자식 프로세스에서도 사용할 수 있다."
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 79,
            "question_type": "multiple_choice",
            "question_description": "TCP 프로토콜에 대한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "노드 간의 프레임 전송과 오류 제어를 담당한다.",
                "2": "흐름 제어를 통해 송신 속도를 조절한다.",
                "3": "전이중 가상 회선을 제공한다.",
                "4": "데이터와 확인 응답을 함께 전송할 수 있다."
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 80,
            "question_type": "multiple_choice",
            "question_description": "다음 설명에 해당하는 무선 LAN 데이터 전송 방식은?",
            "additional_content": "**설명:**\n\n• 매체가 유휴 상태인지 확인한 후 전송\n• 충돌을 피하기 위해 랜덤한 시간만큼 대기\n• 데이터가 없어도 확인 응답 신호를 전송",
            "choices": {
                "1": "STA",
                "2": "Collision Domain",
                "3": "CSMA/CA",
                "4": "CSMA/CD"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 81,
            "question_type": "multiple_choice",
            "question_description": "SSH(Secure Shell)에 대한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "기본 포트는 220번이다.",
                "2": "데이터를 암호화하여 전송한다.",
                "3": "키 기반 인증을 사용할 때는 공개키를 서버에 등록해야 한다.",
                "4": "원격 명령 실행 및 셸 서비스를 제공한다."
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 82,
            "question_type": "multiple_choice",
            "question_description": "다음 네트워크 구성도가 나타내는 방화벽 배치 유형은?",
            "additional_content": "**네트워크 구성도:**\n\nINTERNET → Router → Bastion Host\n                ↓\n                Router → Server, PC\n                ↑\n        Bastion Host → Router",
            "choices": {
                "1": "Block Host",
                "2": "Tree Host",
                "3": "Screened Subnet",
                "4": "Ring Homed"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 83,
            "question_type": "multiple_choice",
            "question_description": "'12536'을 입력해야 할 것을 '12936'로 잘못 입력한 경우의 코드 오류 유형은?",
            "additional_content": null,
            "choices": {
                "1": "추가 오류",
                "2": "생략 오류",
                "3": "순서 오류",
                "4": "전사 오류"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 84,
            "question_type": "multiple_choice",
            "question_description": "PC, TV, 모바일 기기에서 원하는 콘텐츠를 자유롭고 끊김 없이 이용할 수 있게 해주는 서비스는?",
            "additional_content": null,
            "choices": {
                "1": "Memristor",
                "2": "MEMS",
                "3": "SNMP",
                "4": "N-Screen"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 85,
            "question_type": "multiple_choice",
            "question_description": "Secure OS의 보안 기능과 가장 거리가 먼 것은?",
            "additional_content": null,
            "choices": {
                "1": "식별 및 인증",
                "2": "임의적 접근 제어",
                "3": "고가용성 지원",
                "4": "강제적 접근 제어"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 86,
            "question_type": "multiple_choice",
            "question_description": "메모리상에서 프로그램의 특정 주소와 변수 사이에 특정 값을 저장해 두었다가 그 값이 변경되었을 경우 오버플로우 상태를 가정하여 프로그램 실행을 중단하는 기술은?",
            "additional_content": null,
            "choices": {
                "1": "Stack Guard",
                "2": "ASLR",
                "3": "Bridge",
                "4": "FIN"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 87,
            "question_type": "multiple_choice",
            "question_description": "다음 내용이 설명하는 접근 제어 모델은?\n\n- 보안 레벨이 높은 주체가 보안 레벨이 낮은 객체에 쓰기 금지\n- 보안 레벨이 낮은 주체가 보안 레벨이 높은 객체에 읽기 금지\n- 보안 정책에 따라 정보의 흐름을 통제\n- 다중 사용자 환경에서 정보 유출 방지\n- 대표적 모델: Bell-LaPadula 모델\n- 군사적 보안 환경에 적합\n- 기밀성(Confidentiality) 중심\n- 읽기 하향(Read Down), 쓰기 상향(Write Up) 원칙 적용","additional_content": null,
            "choices": {
                "1": "Clark-Wilson Integrity Model",
                "2": "DCA Model",
                "3": "Bell-LaPadula Model",
                "4": "Chinese Wall Model"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 88,
            "question_type": "multiple_choice",
            "question_description": "ISO 12207 표준의 기본 생명 주기 주요 프로세스에 해당하지 않는 것은?",
            "additional_content": null,
            "choices": {
                "1": "개발 프로세스",
                "2": "운영 프로세스",
                "3": "지원 프로세스",
                "4": "테스트 프로세스"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 89,
            "question_type": "multiple_choice",
            "question_description": "라우팅 프로토콜인 OSPF(Open Shortest Path First)에 대한 설명으로 옳은 것은?",
            "additional_content": null,
            "choices": {
                "1": "링크 상태 알고리즘을 사용한다.",
                "2": "거리 벡터 알고리즘을 사용한다.",
                "3": "비연결형 프로토콜이다.",
                "4": "비표준 프로토콜이다."
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 90,
            "question_type": "multiple_choice",
            "question_description": "다음 내용이 설명하는 것은?\n\n- 네트워크상의 광케이블 스위치의 이전과 고속 전송과 장거리 연결 및 멀티 프로토콜 기능을 활용\n- 여러 기종의 네트워크상에서 동일 저장장치의 데이터를 공유하게 함으로써, 여러 서버 저장장치나 백업 장비를 단일화시킨 시스템",
            "additional_content": null,
            "choices": {
                "1": "SAN",
                "2": "NAC",
                "3": "MBR",
                "4": "NIC"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 91,
            "question_type": "multiple_choice",
            "question_description": "CBD(Component Based Development) SW 개발 표준 산출물 중 분석 단계에 해당하는 것은?",
            "additional_content": null,
            "choices": {
                "1": "통합시험 결과서",
                "2": "사용자 요구사항 정의서",
                "3": "프로그램 코드",
                "4": "설계 명세서"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 92,
            "question_type": "multiple_choice",
            "question_description": "소프트웨어 비용 산정 기법 유형으로 Organic, Semi-Detached, Embedded로 구분되는 것은?",
            "additional_content": null,
            "choices": {
                "1": "FP",
                "2": "PUTNAM",
                "3": "COCOMO",
                "4": "SLIM"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 93,
            "question_type": "multiple_choice",
            "question_description": "SPICE 모델의 프로세스 수행 능력 수준의 단계별 설명이 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "수준 1 - 미확정 단계",
                "2": "수준 5 - 최적화 단계",
                "3": "수준 3 - 확정 단계",
                "4": "수준 2 - 관리 단계"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 94,
            "question_type": "multiple_choice",
            "question_description": "서로 다른 네트워크 영역에 있는 호스트를 상호간에 통신할 수 있도록 해주는 네트워크 장비는?",
            "additional_content": null,
            "choices": {
                "1": "L2 스위치",
                "2": "HPD",
                "3": "라우터",
                "4": "브리지"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 95,
            "question_type": "multiple_choice",
            "question_description": "암호화 키와 복호화 키가 동일한 암호화 알고리즘은?",
            "additional_content": null,
            "choices": {
                "1": "RSA",
                "2": "DSA",
                "3": "AES",
                "4": "ECC"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 96,
            "question_type": "multiple_choice",
            "question_description": "IPSec(IP Security)에 대한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "IP 계층에서 보안을 제공하는 프로토콜이다.",
                "2": "전송 모드와 터널 모드가 있다.",
                "3": "전송 모드는 전체 IP 패킷을 암호화한다.",
                "4": "터널 모드는 새로운 IP 헤더를 추가한다."
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 97,
            "question_type": "multiple_choice",
            "question_description": "서버에 열린 포트 정보를 수집해서 보안 취약점을 분석할 때 사용하는 도구는?",
            "additional_content": null,
            "choices": {
                "1": "tvype",
                "2": "mkdir",
                "3": "nmap",
                "4": "SNMP"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 98,
            "question_type": "multiple_choice",
            "question_description": "하둡(Hadoop)과 관계형 데이터베이스간에 데이터를 전송할 수 있도록 설계된 도구는?",
            "additional_content": null,
            "choices": {
                "1": "Apnic",
                "2": "Sqoop",
                "3": "Topology",
                "4": "PKRT"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 99,
            "question_type": "multiple_choice",
            "question_description": "해시(Hash) 기법에 대한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "해시 함수는 임의의 길이의 입력값을 고정된 길이의 출력값으로 변환한다.",
                "2": "해시 함수는 입력값이 조금만 달라져도 출력값이 크게 달라진다.",
                "3": "해시 함수는 복호화가 가능하다.",
                "4": "해시 함수는 단방향 함수(One-way function)이다."
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 100,
            "question_type": "multiple_choice",
            "question_description": "소프트웨어 비용 추정 모형이 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "COCOMO",
                "2": "Function-Point",
                "3": "Putnam",
                "4": "PERT"
            },
            "score": 1
        }
    ]
} 
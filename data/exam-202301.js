const EXAM_DATA_202301 = {
    "year": "2023",
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
            "question_description": "소프트웨어 공학에서 요구사항 분석 단계에서 수행하는 작업이 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "사용자 요구사항 수집",
                "2": "기능적 요구사항 정의",
                "3": "비기능적 요구사항 정의",
                "4": "시스템 아키텍처 설계"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 2,
            "question_type": "multiple_choice",
            "question_description": "객체지향 설계에서 캡슐화(Encapsulation)의 개념으로 가장 적절한 것은?",
            "additional_content": null,
            "choices": {
                "1": "객체의 속성과 메서드를 하나의 단위로 묶어 외부로부터 숨기는 것",
                "2": "상위 클래스의 속성과 메서드를 하위 클래스가 재사용하는 것",
                "3": "여러 객체들이 공통된 인터페이스를 통해 다양한 구현을 제공하는 것",
                "4": "객체 간의 관계를 정의하여 복잡한 시스템을 단순화하는 것"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 3,
            "question_type": "multiple_choice",
            "question_description": "UML 다이어그램 중 시스템의 동적 측면을 표현하는 것은?",
            "additional_content": null,
            "choices": {
                "1": "클래스 다이어그램",
                "2": "시퀀스 다이어그램",
                "3": "컴포넌트 다이어그램",
                "4": "배치 다이어그램"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 4,
            "question_type": "multiple_choice",
            "question_description": "디자인 패턴 중 생성 패턴(Creational Pattern)에 해당하지 않는 것은?",
            "additional_content": null,
            "choices": {
                "1": "Singleton Pattern",
                "2": "Factory Method Pattern",
                "3": "Observer Pattern",
                "4": "Builder Pattern"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 5,
            "question_type": "multiple_choice",
            "question_description": "SOLID 원칙 중 단일 책임 원칙(Single Responsibility Principle)에 대한 설명으로 올바른 것은?",
            "additional_content": null,
            "choices": {
                "1": "하나의 클래스는 하나의 변경 이유만 가져야 한다",
                "2": "하위 타입은 상위 타입을 대체할 수 있어야 한다",
                "3": "클라이언트는 사용하지 않는 인터페이스에 의존하지 않아야 한다",
                "4": "추상화에 의존해야 하며 구체화에 의존하지 않아야 한다"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 6,
            "question_type": "multiple_choice",
            "question_description": "소프트웨어 아키텍처 패턴 중 MVC(Model-View-Controller) 패턴의 장점이 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "관심사의 분리",
                "2": "코드 재사용성 향상",
                "3": "테스트 용이성",
                "4": "성능 최적화"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 7,
            "question_type": "multiple_choice",
            "question_description": "데이터 흐름도(DFD)에서 데이터 저장소를 나타내는 기호는?",
            "additional_content": null,
            "choices": {
                "1": "원",
                "2": "사각형",
                "3": "평행사변형",
                "4": "직사각형"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 8,
            "question_type": "multiple_choice",
            "question_description": "소프트웨어 설계에서 결합도(Coupling)가 가장 낮은 것은?",
            "additional_content": null,
            "choices": {
                "1": "데이터 결합도",
                "2": "스탬프 결합도",
                "3": "제어 결합도",
                "4": "내용 결합도"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 9,
            "question_type": "multiple_choice",
            "question_description": "UML 클래스 다이어그램에서 상속 관계를 나타내는 기호는?",
            "additional_content": null,
            "choices": {
                "1": "실선 화살표",
                "2": "점선 화살표",
                "3": "실선 삼각형",
                "4": "점선 삼각형"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 10,
            "question_type": "multiple_choice",
            "question_description": "소프트웨어 모듈화의 목적으로 적절하지 않은 것은?",
            "additional_content": null,
            "choices": {
                "1": "코드의 재사용성 향상",
                "2": "유지보수성 개선",
                "3": "성능 최적화",
                "4": "복잡성 감소"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 11,
            "question_type": "multiple_choice",
            "question_description": "객체지향 분석에서 유스케이스(Use Case) 다이어그램의 구성 요소가 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "액터(Actor)",
                "2": "유스케이스(Use Case)",
                "3": "시스템 경계",
                "4": "클래스(Class)"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 12,
            "question_type": "multiple_choice",
            "question_description": "소프트웨어 설계 원칙 중 응집도(Cohesion)가 가장 높은 것은?",
            "additional_content": null,
            "choices": {
                "1": "기능적 응집도",
                "2": "순차적 응집도",
                "3": "통신적 응집도",
                "4": "논리적 응집도"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 13,
            "question_type": "multiple_choice",
            "question_description": "UML 시퀀스 다이어그램에서 객체 간의 메시지 전송을 나타내는 것은?",
            "additional_content": null,
            "choices": {
                "1": "수평선",
                "2": "수직선",
                "3": "화살표",
                "4": "점선"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 14,
            "question_type": "multiple_choice",
            "question_description": "소프트웨어 아키텍처에서 레이어드 아키텍처(Layered Architecture)의 특징이 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "계층 간 의존성",
                "2": "모듈화",
                "3": "확장성",
                "4": "분산 처리"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 15,
            "question_type": "multiple_choice",
            "question_description": "객체지향 설계에서 다형성(Polymorphism)의 개념으로 올바른 것은?",
            "additional_content": null,
            "choices": {
                "1": "같은 인터페이스를 통해 다양한 구현을 제공하는 것",
                "2": "객체의 속성과 메서드를 하나로 묶는 것",
                "3": "상위 클래스의 기능을 하위 클래스가 재정의하는 것",
                "4": "객체 간의 관계를 정의하는 것"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 16,
            "question_type": "multiple_choice",
            "question_description": "소프트웨어 설계에서 인터페이스 설계 원칙이 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "일관성",
                "2": "직관성",
                "3": "효율성",
                "4": "복잡성"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 17,
            "question_type": "multiple_choice",
            "question_description": "UML 액티비티 다이어그램에서 의사결정을 나타내는 기호는?",
            "additional_content": null,
            "choices": {
                "1": "원",
                "2": "마름모",
                "3": "사각형",
                "4": "평행사변형"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 18,
            "question_type": "multiple_choice",
            "question_description": "소프트웨어 설계 패턴 중 구조 패턴(Structural Pattern)에 해당하는 것은?",
            "additional_content": null,
            "choices": {
                "1": "Adapter Pattern",
                "2": "Strategy Pattern",
                "3": "Command Pattern",
                "4": "State Pattern"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 19,
            "question_type": "multiple_choice",
            "question_description": "객체지향 분석에서 클래스 간의 관계 중 'has-a' 관계를 나타내는 것은?",
            "additional_content": null,
            "choices": {
                "1": "상속 관계",
                "2": "연관 관계",
                "3": "의존 관계",
                "4": "집합 관계"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 20,
            "question_type": "multiple_choice",
            "question_description": "소프트웨어 설계에서 모듈의 크기를 결정할 때 고려해야 할 요소가 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "응집도",
                "2": "결합도",
                "3": "복잡도",
                "4": "성능"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 21,
            "question_type": "multiple_choice",
            "question_description": "소프트웨어 개발 방법론 중 애자일(Agile) 방법론의 특징이 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "반복적 개발",
                "2": "고객과의 협력",
                "3": "변화에 대한 적응",
                "4": "상세한 문서화"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 22,
            "question_type": "multiple_choice",
            "question_description": "스크럼(Scrum)에서 스프린트(Sprint)의 기간은 보통 얼마인가?",
            "additional_content": null,
            "choices": {
                "1": "1-2주",
                "2": "2-4주",
                "3": "4-6주",
                "4": "6-8주"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 23,
            "question_type": "multiple_choice",
            "question_description": "테스트 주도 개발(TDD)의 개발 순서로 올바른 것은?",
            "additional_content": null,
            "choices": {
                "1": "테스트 → 리팩토링 → 구현",
                "2": "테스트 → 구현 → 리팩토링",
                "3": "구현 → 테스트 → 리팩토링",
                "4": "리팩토링 → 테스트 → 구현"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 24,
            "question_type": "multiple_choice",
            "question_description": "화이트박스 테스트 기법 중 조건 커버리지(Condition Coverage)에 대한 설명으로 올바른 것은?",
            "additional_content": null,
            "choices": {
                "1": "모든 문장이 최소 한 번씩 실행되는 것",
                "2": "모든 분기문의 참/거짓이 최소 한 번씩 실행되는 것",
                "3": "모든 조건문의 각 조건이 참/거짓을 최소 한 번씩 가지는 것",
                "4": "모든 경로가 최소 한 번씩 실행되는 것"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 25,
            "question_type": "multiple_choice",
            "question_description": "소프트웨어 품질 모델 ISO/IEC 25000에서 기능성(Functionality)의 하위 특성이 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "적합성(Suitability)",
                "2": "정확성(Accuracy)",
                "3": "상호운용성(Interoperability)",
                "4": "효율성(Efficiency)"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 26,
            "question_type": "multiple_choice",
            "question_description": "코드 인스펙션(Code Inspection)에서 발견된 결함을 분류할 때 심각도가 가장 높은 것은?",
            "additional_content": null,
            "choices": {
                "1": "Major",
                "2": "Minor",
                "3": "Critical",
                "4": "Trivial"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 27,
            "question_type": "multiple_choice",
            "question_description": "리스크 관리에서 리스크 대응 전략이 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "회피(Avoidance)",
                "2": "이전(Transfer)",
                "3": "완화(Mitigation)",
                "4": "무시(Ignore)"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 28,
            "question_type": "multiple_choice",
            "question_description": "C언어에서 포인터 변수의 크기는?",
            "additional_content": null,
            "choices": {
                "1": "1바이트",
                "2": "2바이트",
                "3": "4바이트",
                "4": "시스템에 따라 다름"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 29,
            "question_type": "multiple_choice",
            "question_description": "Java에서 인터페이스(Interface)의 특징이 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "다중 상속 가능",
                "2": "추상 메서드만 포함 가능",
                "3": "인스턴스 생성 불가",
                "4": "생성자 포함 가능"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 30,
            "question_type": "multiple_choice",
            "question_description": "Python에서 리스트(List)의 특징으로 올바른 것은?",
            "additional_content": null,
            "choices": {
                "1": "순서가 없고 중복을 허용하지 않음",
                "2": "순서가 있고 중복을 허용함",
                "3": "순서가 없고 중복을 허용함",
                "4": "순서가 있고 중복을 허용하지 않음"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 31,
            "question_type": "multiple_choice",
            "question_description": "OSI 7계층 모델에서 전송 계층(Transport Layer)의 프로토콜이 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "TCP",
                "2": "UDP",
                "3": "HTTP",
                "4": "SCTP"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 32,
            "question_type": "multiple_choice",
            "question_description": "TCP/IP 프로토콜 스택에서 ICMP(Internet Control Message Protocol)의 역할은?",
            "additional_content": null,
            "choices": {
                "1": "데이터 전송",
                "2": "오류 보고 및 진단",
                "3": "주소 변환",
                "4": "세션 관리"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 33,
            "question_type": "multiple_choice",
            "question_description": "소프트웨어 모듈의 결합도(Coupling) 중 가장 바람직한 것은?",
            "additional_content": null,
            "choices": {
                "1": "데이터 결합도",
                "2": "스탬프 결합도",
                "3": "제어 결합도",
                "4": "내용 결합도"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 34,
            "question_type": "multiple_choice",
            "question_description": "동시성 제어에서 세마포어(Semaphore)의 주요 용도는?",
            "additional_content": null,
            "choices": {
                "1": "프로세스 간 통신",
                "2": "상호 배제(Mutual Exclusion)",
                "3": "메모리 관리",
                "4": "파일 시스템 관리"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 35,
            "question_type": "multiple_choice",
            "question_description": "소프트웨어 모듈의 특징 중 응집도(Cohesion)가 가장 높은 것은?",
            "additional_content": null,
            "choices": {
                "1": "기능적 응집도",
                "2": "순차적 응집도",
                "3": "통신적 응집도",
                "4": "논리적 응집도"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 36,
            "question_type": "multiple_choice",
            "question_description": "메모리 관리에서 Best Fit 알고리즘의 특징은?",
            "additional_content": null,
            "choices": {
                "1": "요청 크기와 가장 근접한 빈 공간을 할당",
                "2": "첫 번째로 발견되는 충분한 크기의 빈 공간을 할당",
                "3": "가장 큰 빈 공간을 할당",
                "4": "가장 작은 빈 공간을 할당"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 37,
            "question_type": "multiple_choice",
            "question_description": "빌드 도구 중 Maven의 특징이 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "XML 기반 설정",
                "2": "의존성 관리",
                "3": "프로젝트 생명주기 관리",
                "4": "실시간 컴파일"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 38,
            "question_type": "multiple_choice",
            "question_description": "UNIX/Linux 시스템에서 파일 권한을 변경하는 명령어는?",
            "additional_content": null,
            "choices": {
                "1": "chmod",
                "2": "chown",
                "3": "chgrp",
                "4": "ls"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 39,
            "question_type": "multiple_choice",
            "question_description": "EAI(Enterprise Application Integration) 패턴 중 Hub & Spoke 모델의 특징은?",
            "additional_content": null,
            "choices": {
                "1": "중앙 집중식 통합",
                "2": "분산식 통합",
                "3": "점대점 통합",
                "4": "메시지 기반 통합"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 40,
            "question_type": "multiple_choice",
            "question_description": "소프트웨어 테스트에서 테스트 오라클(Test Oracle)의 종류가 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "샘플링 오라클",
                "2": "전체 오라클",
                "3": "휴리스틱 오라클",
                "4": "자동화 오라클"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 41,
            "question_type": "multiple_choice",
            "question_description": "데이터베이스 설계 단계 중 물리적 설계에서 수행하는 작업이 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "인덱스 설계",
                "2": "저장 구조 설계",
                "3": "엔티티 정의",
                "4": "접근 경로 설계"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 42,
            "question_type": "multiple_choice",
            "question_description": "SQL에서 DELETE 문의 특징으로 올바른 것은?",
            "additional_content": null,
            "choices": {
                "1": "테이블 구조를 삭제한다",
                "2": "테이블의 데이터만 삭제한다",
                "3": "테이블 자체를 삭제한다",
                "4": "데이터베이스를 삭제한다"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 43,
            "question_type": "multiple_choice",
            "question_description": "CREATE TABLE 문에서 PRIMARY KEY 제약조건의 특징은?",
            "additional_content": null,
            "choices": {
                "1": "NULL 값을 허용한다",
                "2": "중복 값을 허용한다",
                "3": "NULL 값을 허용하지 않는다",
                "4": "외래키와 연결할 수 없다"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 44,
            "question_type": "multiple_choice",
            "question_description": "정규화 과정에서 제1정규형(1NF)의 조건이 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "원자값으로 구성",
                "2": "중복된 튜플이 없어야 함",
                "3": "부분 함수적 종속이 없어야 함",
                "4": "반복 그룹이 없어야 함"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 45,
            "question_type": "multiple_choice",
            "question_description": "E-R 모델에서 다중값 속성(Multi-valued Attribute)의 표기법은?",
            "additional_content": null,
            "choices": {
                "1": "단일 원",
                "2": "이중 원",
                "3": "단일 사각형",
                "4": "이중 사각형"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 46,
            "question_type": "multiple_choice",
            "question_description": "외래키(Foreign Key)의 특징으로 올바른 것은?",
            "additional_content": null,
            "choices": {
                "1": "NULL 값을 가질 수 없다",
                "2": "참조하는 테이블의 기본키와 일치해야 한다",
                "3": "중복 값을 가질 수 없다",
                "4": "자동으로 인덱스가 생성되지 않는다"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 47,
            "question_type": "multiple_choice",
            "question_description": "관계 대수에서 프로젝션(Projection) 연산의 특징은?",
            "additional_content": null,
            "choices": {
                "1": "행을 선택한다",
                "2": "열을 선택한다",
                "3": "두 테이블을 결합한다",
                "4": "집계 함수를 적용한다"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 48,
            "question_type": "multiple_choice",
            "question_description": "SQL에서 뷰(View)의 특징이 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "독립적인 저장 공간을 가진다",
                "2": "보안을 제공한다",
                "3": "데이터 독립성을 제공한다",
                "4": "복잡한 쿼리를 단순화한다"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 49,
            "question_type": "multiple_choice",
            "question_description": "트랜잭션의 상태 중 'aborted' 상태의 의미는?",
            "additional_content": null,
            "choices": {
                "1": "트랜잭션이 실행 중인 상태",
                "2": "트랜잭션이 성공적으로 완료된 상태",
                "3": "트랜잭션이 실패하여 롤백된 상태",
                "4": "트랜잭션이 부분적으로 커밋된 상태"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 50,
            "question_type": "multiple_choice",
            "question_description": "분산 데이터베이스에서 투명성(Transparency)의 종류가 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "위치 투명성",
                "2": "복제 투명성",
                "3": "분할 투명성",
                "4": "성능 투명성"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 51,
            "question_type": "multiple_choice",
            "question_description": "동시성 제어에서 발생할 수 있는 문제가 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "Lost Update",
                "2": "Dirty Read",
                "3": "Non-repeatable Read",
                "4": "Dead Lock"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 52,
            "question_type": "multiple_choice",
            "question_description": "데이터베이스 파티셔닝(Partitioning) 방식 중 Range Partitioning의 특징은?",
            "additional_content": null,
            "choices": {
                "1": "범위에 따라 데이터를 분할",
                "2": "해시 함수를 사용하여 분할",
                "3": "리스트 값에 따라 분할",
                "4": "복합 조건에 따라 분할"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 53,
            "question_type": "multiple_choice",
            "question_description": "데이터베이스 무결성(Integrity)의 종류 중 도메인 무결성에 대한 설명으로 올바른 것은?",
            "additional_content": null,
            "choices": {
                "1": "기본키의 유일성을 보장",
                "2": "외래키의 참조 무결성을 보장",
                "3": "속성값의 범위를 보장",
                "4": "사용자가 정의한 제약조건을 보장"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 54,
            "question_type": "multiple_choice",
            "question_description": "시스템 카탈로그(System Catalog)의 역할이 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "데이터 사전 역할",
                "2": "메타데이터 저장",
                "3": "데이터 백업",
                "4": "스키마 정보 관리"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 55,
            "question_type": "multiple_choice",
            "question_description": "트리거(Trigger)의 특징으로 올바른 것은?",
            "additional_content": null,
            "choices": {
                "1": "명시적으로 호출해야 실행된다",
                "2": "특정 이벤트 발생 시 자동으로 실행된다",
                "3": "반환값을 가질 수 있다",
                "4": "매개변수를 받을 수 없다"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 56,
            "question_type": "multiple_choice",
            "question_description": "관계 대수와 관계 해석의 차이점으로 올바른 것은?",
            "additional_content": null,
            "choices": {
                "1": "관계 대수는 절차적 언어이다",
                "2": "관계 해석은 절차적 언어이다",
                "3": "관계 대수는 선언적 언어이다",
                "4": "관계 해석은 명령형 언어이다"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 57,
            "question_type": "multiple_choice",
            "question_description": "고가용성(High Availability)을 위한 HACMP의 특징은?",
            "additional_content": null,
            "choices": {
                "1": "단일 장애점 제거",
                "2": "성능 향상",
                "3": "보안 강화",
                "4": "백업 자동화"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 58,
            "question_type": "multiple_choice",
            "question_description": "CRUD 분석에서 'R'이 의미하는 것은?",
            "additional_content": null,
            "choices": {
                "1": "Create",
                "2": "Read",
                "3": "Update",
                "4": "Delete"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 59,
            "question_type": "multiple_choice",
            "question_description": "SQL에서 UNIQUE 제약조건의 특징은?",
            "additional_content": null,
            "choices": {
                "1": "NULL 값을 허용하지 않는다",
                "2": "중복 값을 허용하지 않는다",
                "3": "기본키와 동일한 역할을 한다",
                "4": "외래키와 연결할 수 없다"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 60,
            "question_type": "multiple_choice",
            "question_description": "데이터베이스에서 인덱스(Index)의 장점이 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "검색 속도 향상",
                "2": "정렬 속도 향상",
                "3": "저장 공간 절약",
                "4": "조인 성능 향상"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 61,
            "question_type": "multiple_choice",
            "question_description": "C언어에서 배열과 포인터의 관계에 대한 설명으로 올바른 것은?",
            "additional_content": null,
            "choices": {
                "1": "배열명은 포인터 상수이다",
                "2": "포인터는 배열과 동일하다",
                "3": "배열은 포인터 변수이다",
                "4": "배열과 포인터는 완전히 독립적이다"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 62,
            "question_type": "multiple_choice",
            "question_description": "Java에서 예외 처리(Exception Handling)의 특징이 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "try-catch 블록 사용",
                "2": "finally 블록 사용",
                "3": "예외 전파 가능",
                "4": "예외 무시 가능"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 63,
            "question_type": "multiple_choice",
            "question_description": "Python에서 딕셔너리(Dictionary)의 특징으로 올바른 것은?",
            "additional_content": null,
            "choices": {
                "1": "순서가 있고 중복을 허용한다",
                "2": "순서가 없고 중복을 허용하지 않는다",
                "3": "키-값 쌍으로 구성된다",
                "4": "인덱스로 접근한다"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 64,
            "question_type": "multiple_choice",
            "question_description": "C언어에서 비트 연산자 중 AND(&) 연산의 결과가 1이 되는 경우는?",
            "additional_content": null,
            "choices": {
                "1": "두 비트가 모두 0일 때",
                "2": "두 비트가 모두 1일 때",
                "3": "두 비트가 서로 다를 때",
                "4": "두 비트 중 하나라도 1일 때"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 65,
            "question_type": "multiple_choice",
            "question_description": "Java에서 스레드(Thread)의 생명주기 상태가 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "New",
                "2": "Runnable",
                "3": "Running",
                "4": "Terminated"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 66,
            "question_type": "multiple_choice",
            "question_description": "C언어에서 구조체(struct)의 특징으로 올바른 것은?",
            "additional_content": null,
            "choices": {
                "1": "메서드를 포함할 수 있다",
                "2": "상속이 가능하다",
                "3": "서로 다른 타입의 데이터를 묶을 수 있다",
                "4": "자동으로 초기화된다"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 67,
            "question_type": "multiple_choice",
            "question_description": "Java에서 컬렉션 프레임워크의 특징이 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "다양한 데이터 구조 제공",
                "2": "제네릭 지원",
                "3": "타입 안전성 보장",
                "4": "자동 메모리 관리"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 68,
            "question_type": "multiple_choice",
            "question_description": "C언어에서 malloc() 함수의 역할은?",
            "additional_content": null,
            "choices": {
                "1": "메모리 해제",
                "2": "메모리 할당",
                "3": "메모리 복사",
                "4": "메모리 이동"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 69,
            "question_type": "multiple_choice",
            "question_description": "Java에서 가비지 컬렉터(Garbage Collector)의 역할은?",
            "additional_content": null,
            "choices": {
                "1": "메모리 할당",
                "2": "메모리 해제",
                "3": "메모리 복사",
                "4": "메모리 이동"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 70,
            "question_type": "multiple_choice",
            "question_description": "Python에서 문자열(String)의 특징으로 올바른 것은?",
            "additional_content": null,
            "choices": {
                "1": "변경 가능한 객체이다",
                "2": "변경 불가능한 객체이다",
                "3": "숫자와 연산이 가능하다",
                "4": "자동으로 정렬된다"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 71,
            "question_type": "multiple_choice",
            "question_description": "C언어에서 포인터 배열과 배열 포인터의 차이점으로 올바른 것은?",
            "additional_content": null,
            "choices": {
                "1": "포인터 배열은 포인터들의 배열이다",
                "2": "배열 포인터는 포인터들의 배열이다",
                "3": "둘 다 동일한 의미이다",
                "4": "둘 다 사용할 수 없다"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 72,
            "question_type": "multiple_choice",
            "question_description": "Java에서 인터페이스와 추상 클래스의 차이점으로 올바른 것은?",
            "additional_content": null,
            "choices": {
                "1": "인터페이스는 다중 상속이 가능하다",
                "2": "추상 클래스는 다중 상속이 가능하다",
                "3": "인터페이스는 생성자를 가질 수 있다",
                "4": "추상 클래스는 필드를 가질 수 없다"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 73,
            "question_type": "multiple_choice",
            "question_description": "Python에서 리스트 컴프리헨션(List Comprehension)의 특징은?",
            "additional_content": null,
            "choices": {
                "1": "반복문을 사용하여 리스트를 생성한다",
                "2": "조건문만 사용하여 리스트를 생성한다",
                "3": "함수를 사용하여 리스트를 생성한다",
                "4": "클래스를 사용하여 리스트를 생성한다"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 74,
            "question_type": "multiple_choice",
            "question_description": "C언어에서 함수 포인터의 용도로 적절하지 않은 것은?",
            "additional_content": null,
            "choices": {
                "1": "콜백 함수 구현",
                "2": "함수를 매개변수로 전달",
                "3": "함수를 반환값으로 사용",
                "4": "메모리 할당"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 75,
            "question_type": "multiple_choice",
            "question_description": "Java에서 synchronized 키워드의 역할은?",
            "additional_content": null,
            "choices": {
                "1": "메모리 할당",
                "2": "동기화",
                "3": "예외 처리",
                "4": "가비지 컬렉션"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 76,
            "question_type": "multiple_choice",
            "question_description": "Python에서 데코레이터(Decorator)의 역할은?",
            "additional_content": null,
            "choices": {
                "1": "함수를 수정한다",
                "2": "함수를 장식한다",
                "3": "함수를 호출한다",
                "4": "함수를 삭제한다"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 77,
            "question_type": "multiple_choice",
            "question_description": "C언어에서 전역 변수와 지역 변수의 차이점으로 올바른 것은?",
            "additional_content": null,
            "choices": {
                "1": "전역 변수는 함수 내에서만 사용 가능하다",
                "2": "지역 변수는 프로그램 전체에서 사용 가능하다",
                "3": "전역 변수는 프로그램 전체에서 사용 가능하다",
                "4": "둘 다 동일한 범위를 가진다"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 78,
            "question_type": "multiple_choice",
            "question_description": "Java에서 final 키워드의 용도가 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "상수 선언",
                "2": "메서드 재정의 방지",
                "3": "클래스 상속 방지",
                "4": "변수 초기화"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 79,
            "question_type": "multiple_choice",
            "question_description": "Python에서 제너레이터(Generator)의 특징으로 올바른 것은?",
            "additional_content": null,
            "choices": {
                "1": "모든 값을 메모리에 저장한다",
                "2": "필요한 시점에 값을 생성한다",
                "3": "반환값을 가질 수 없다",
                "4": "매개변수를 받을 수 없다"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 80,
            "question_type": "multiple_choice",
            "question_description": "C언어에서 매크로와 인라인 함수의 차이점으로 올바른 것은?",
            "additional_content": null,
            "choices": {
                "1": "매크로는 타입 검사를 한다",
                "2": "인라인 함수는 타입 검사를 한다",
                "3": "매크로는 함수 호출 오버헤드가 있다",
                "4": "인라인 함수는 전처리기에 의해 처리된다"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 81,
            "question_type": "multiple_choice",
            "question_description": "소프트웨어 생명주기 모델 중 스파이럴 모델(Spiral Model)의 특징은?",
            "additional_content": null,
            "choices": {
                "1": "순차적 개발",
                "2": "반복적 개발과 위험 분석",
                "3": "프로토타입 중심 개발",
                "4": "병렬적 개발"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 82,
            "question_type": "multiple_choice",
            "question_description": "V-모델(V-Model)의 특징으로 올바른 것은?",
            "additional_content": null,
            "choices": {
                "1": "개발 단계와 테스트 단계가 대응된다",
                "2": "반복적 개발을 강조한다",
                "3": "프로토타입을 중심으로 한다",
                "4": "병렬적 개발을 지원한다"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 83,
            "question_type": "multiple_choice",
            "question_description": "네트워크 공격 중 스위치 재밍(Switch Jamming)의 특징은?",
            "additional_content": null,
            "choices": {
                "1": "MAC 주소 테이블을 포화시킨다",
                "2": "패킷을 중간에서 가로챈다",
                "3": "서비스를 중단시킨다",
                "4": "데이터를 변조한다"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 84,
            "question_type": "multiple_choice",
            "question_description": "DoS(Denial of Service) 공격의 특징이 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "서비스 가용성 저해",
                "2": "대량의 트래픽 발생",
                "3": "시스템 자원 고갈",
                "4": "데이터 유출"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 85,
            "question_type": "multiple_choice",
            "question_description": "블루투스 공격 중 블루스나프(BlueSnarf)의 특징은?",
            "additional_content": null,
            "choices": {
                "1": "데이터를 도청한다",
                "2": "데이터를 훔친다",
                "3": "서비스를 중단시킨다",
                "4": "장치를 제어한다"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 86,
            "question_type": "multiple_choice",
            "question_description": "웹 보안 취약점 중 SQL 인젝션(SQL Injection)의 특징은?",
            "additional_content": null,
            "choices": {
                "1": "데이터베이스 쿼리를 조작한다",
                "2": "세션을 탈취한다",
                "3": "파일을 업로드한다",
                "4": "암호를 해독한다"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 87,
            "question_type": "multiple_choice",
            "question_description": "저장 시스템 중 DAS(Direct Attached Storage)의 특징은?",
            "additional_content": null,
            "choices": {
                "1": "서버에 직접 연결",
                "2": "네트워크를 통해 연결",
                "3": "SAN을 통해 연결",
                "4": "클라우드를 통해 연결"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 88,
            "question_type": "multiple_choice",
            "question_description": "취약점 관리(Vulnerability Management)의 단계가 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "발견(Discovery)",
                "2": "평가(Evaluation)",
                "3": "수정(Remediation)",
                "4": "공격(Attack)"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 89,
            "question_type": "multiple_choice",
            "question_description": "허니팟(Honeypot)의 역할로 올바른 것은?",
            "additional_content": null,
            "choices": {
                "1": "공격자를 유인하여 정보를 수집한다",
                "2": "네트워크 트래픽을 차단한다",
                "3": "데이터를 암호화한다",
                "4": "백업을 수행한다"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 90,
            "question_type": "multiple_choice",
            "question_description": "Docker의 특징이 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "가상화 기술",
                "2": "컨테이너 기술",
                "3": "경량화",
                "4": "하이퍼바이저 필요"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 91,
            "question_type": "multiple_choice",
            "question_description": "프로젝트 관리에서 간트 차트(Gantt Chart)의 특징은?",
            "additional_content": null,
            "choices": {
                "1": "작업의 시간적 관계를 표현한다",
                "2": "작업의 논리적 관계를 표현한다",
                "3": "작업의 비용을 표현한다",
                "4": "작업의 품질을 표현한다"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 92,
            "question_type": "multiple_choice",
            "question_description": "웹 크롤링 프레임워크 중 Scrapy의 특징이 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "Python 기반",
                "2": "비동기 처리",
                "3": "JavaScript 실행",
                "4": "확장성"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 93,
            "question_type": "multiple_choice",
            "question_description": "악성코드 중 웜(Worm)의 특징은?",
            "additional_content": null,
            "choices": {
                "1": "자체 복제",
                "2": "숨김 기능",
                "3": "광고 표시",
                "4": "파일 암호화"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 94,
            "question_type": "multiple_choice",
            "question_description": "정보 보안의 3대 요소가 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "기밀성(Confidentiality)",
                "2": "무결성(Integrity)",
                "3": "가용성(Availability)",
                "4": "신뢰성(Reliability)"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 95,
            "question_type": "multiple_choice",
            "question_description": "소프트웨어 규모 측정에서 LOC(Lines of Code)의 특징은?",
            "additional_content": null,
            "choices": {
                "1": "코드의 줄 수를 측정한다",
                "2": "기능의 수를 측정한다",
                "3": "복잡도를 측정한다",
                "4": "품질을 측정한다"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 96,
            "question_type": "multiple_choice",
            "question_description": "COCOMO 모델에서 Organic 모드의 특징은?",
            "additional_content": null,
            "choices": {
                "1": "작은 규모의 프로젝트",
                "2": "중간 규모의 프로젝트",
                "3": "큰 규모의 프로젝트",
                "4": "임베디드 프로젝트"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 97,
            "question_type": "multiple_choice",
            "question_description": "Wi-Fi 보안 중 WPA(Wi-Fi Protected Access)의 특징은?",
            "additional_content": null,
            "choices": {
                "1": "TKIP 암호화",
                "2": "WEP 암호화",
                "3": "WPS 인증",
                "4": "MAC 필터링"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 98,
            "question_type": "multiple_choice",
            "question_description": "암호화 알고리즘 중 AES(Advanced Encryption Standard)의 특징은?",
            "additional_content": null,
            "choices": {
                "1": "대칭키 암호화",
                "2": "비대칭키 암호화",
                "3": "해시 함수",
                "4": "디지털 서명"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 99,
            "question_type": "multiple_choice",
            "question_description": "침입 탐지 시스템(IDS) 중 HIDS(Host-based IDS)의 특징은?",
            "additional_content": null,
            "choices": {
                "1": "호스트 기반 탐지",
                "2": "네트워크 기반 탐지",
                "3": "무선 기반 탐지",
                "4": "웹 기반 탐지"
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
const EXAM_DATA_202201 = {
    "year": "2022",
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
            "question_description": "User Interface 설계 시 오류 메시지나 경고에 관한 지침으로 가장 거리가 먼 것은?",
            "additional_content": null,
            "choices": {
                "1": "메시지는 이해하기 쉬워야 한다",
                "2": "오류로부터 회복을 위한 구체적인 설명이 제공되어야 한다",
                "3": "오류로 인해 발생될 수 있는 부정적인 내용을 적극적으로 사용자들에게 알려야 한다",
                "4": "소리나 색의 사용을 줄이고 텍스트로만 전달하도록 한다"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 2,
            "question_type": "multiple_choice",
            "question_description": "다음 중 애자일(Agile) 소프트웨어 개발에 대한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "공정과 도구보다 개인과의 상호작용을 더 가치 있게 여긴다",
                "2": "동작하는 소프트웨어보다는 포괄적인 문서를 가치 있게 여긴다",
                "3": "계약 협상보다는 고객과의 협력을 가치 있게 여긴다",
                "4": "계획을 따르기보다 변화에 대응하기를 가치 있게 여긴다"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 3,
            "question_type": "multiple_choice",
            "question_description": "소프트웨어 설계에서 요구사항 분석에 대한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "소프트웨어가 무엇을 해야 하는가를 추적하여 요구사항 명세를 작성하는 작업이다",
                "2": "사용자의 요구를 추출하여 목표를 정하고 어떤 방식으로 해결할 것인지 결정하는 단계이다",
                "3": "소프트웨어 시스템이 사용되는 동안 발견되는 오류를 정리하는 단계이다",
                "4": "소프트웨어 개발의 출발점이면서 실질적인 첫 번째 단계이다"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 4,
            "question_type": "multiple_choice",
            "question_description": "객체지향 기법에서 상위 클래스의 메소드와 속성을 하위 클래스가 물려받는 것을 의미하는 것은?",
            "additional_content": null,
            "choices": {
                "1": "Abstraction",
                "2": "Polymorphism",
                "3": "Encapsulation",
                "4": "Inheritance"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 5,
            "question_type": "multiple_choice",
            "question_description": "설계 기법 중 하향식 설계 방법과 상향식 설계 방법에 대한 비교 설명으로 가장 옳지 않은 것은?",
            "additional_content": null,
            "choices": {
                "1": "하향식 설계에서는 통합 검사 시 인터페이스가 이미 정의되어 있어 통합이 간단하다",
                "2": "하향식 설계에서 레벨이 낮은 데이터 구조의 세부 사항은 설계 초기 단계에서 필요하다",
                "3": "상향식 설계는 최하위 수준에서 각각의 모듈들을 설계하고 이러한 모듈이 완성되면 이들을 결합하여 검사한다",
                "4": "상향식 설계에서는 인터페이스가 이미 성립되어 있지 않더라도 기능 추가가 쉽다"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 6,
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
            "category_id": 1,
            "question_number": 7,
            "question_type": "multiple_choice",
            "question_description": "소프트웨어 개발에 이용되는 모델(Model)에 대한 설명 중 거리가 먼 것은?",
            "additional_content": null,
            "choices": {
                "1": "모델은 개발 대상을 추상화하고 기호나 그림 등으로 시각적으로 표현한다",
                "2": "모델을 통해 소프트웨어에 대한 이해도를 향상시킬 수 있다",
                "3": "모델을 통해 이해 당사자 간의 의사소통이 향상된다",
                "4": "모델을 통해 향후 개발될 시스템의 유추는 불가능하다"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 8,
            "question_type": "multiple_choice",
            "question_description": "객체 지향 시스템을 개발할 때 산출물을 명세화, 시각화, 문서화하는데 사용된다. 즉, 개발하는 시스템을 이해하기 쉬운 형태로 표현하여 분석가, 의뢰인, 설계자가 효율적인 의사소통을 할 수 있게 해 준다. 따라서, 개발 방법론이나 개발 프로세스가 아니라 표준화된 모델링 언어이다. 이 설명에 해당하는 언어는?",
            "additional_content": null,
            "choices": {
                "1": "JAVA",
                "2": "C",
                "3": "UML",
                "4": "Python"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 9,
            "question_type": "multiple_choice",
            "question_description": "디자인, 사용방법설명, 평가 등을 위해 실제 화면과 유사하게 만든 정적인 형태의 모형으로, 시각적으로만 구성 요소를 배치하는 것으로 일반적으로 실제로 구현되지는 않는 UI 설계 도구는?",
            "additional_content": null,
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
            "question_number": 10,
            "question_type": "multiple_choice",
            "question_description": "애자일(Agile) 기법 중 스크럼(Scrum)과 관련된 용어에 대한 설명이 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "스크럼 마스터(Scrum Master)는 스크럼 프로세스를 따르고, 팀이 스크럼을 효과적으로 활용할 수 있도록 보장하는 역할 등을 맡는다",
                "2": "제품 백로그(Product Backlog)는 스크럼 팀이 해결해야 하는 목록으로 소프트웨어 요구사항, 아키텍처 정의 등이 포함될 수 있다",
                "3": "스프린트(Sprint)는 하나의 완성된 최종 결과물을 만들기 위한 주기로 3달 이상의 장기간으로 결정된다",
                "4": "속도(Velocity)는 한 번의 스프린트에서 한 팀이 어느 정도의 제품 백로그를 감당할 수 있는지에 대한 추정치로 볼 수 있다"
            },
            "score": 1
        },
        {
            "category_id": 1,
            "question_number": 11,
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
            "category_id": 2,
            "question_number": 12,
            "question_type": "multiple_choice",
            "question_description": "LOC 기법에 의하여 예측된 총 라인수가 36000라인, 개발에 참여할 프로그래머가 6명, 프로그래머들의 평균 생산성이 월간 300라인일 때 개발에 소요되는 기간을 계산한 결과로 가장 옳은 것은?",
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
            "category_id": 2,
            "question_number": 13,
            "question_type": "multiple_choice",
            "question_description": "클래스 설계 원칙에 대한 바른 설명은?",
            "additional_content": null,
            "choices": {
                "1": "단일 책임 원칙: 하나의 클래스만 변경 가능해야 한다",
                "2": "개방-폐쇄의 원칙: 클래스는 확장에 대해 열려 있어야 하며 변경에 대해 닫혀 있어야 한다",
                "3": "리스코프 교체의 원칙: 여러 개의 책임을 가진 클래스는 하나의 책임을 가진 클래스로 대체되어야 한다",
                "4": "의존관계 역전의 원칙: 클라이언트는 자신이 사용하는 메소드와 의존관계를 갖지 않도록 해야 한다"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 14,
            "question_type": "multiple_choice",
            "question_description": "GoF(Gangs of Four) 디자인 패턴에서 생성(Creational) 패턴에 해당하는 것은?",
            "additional_content": null,
            "choices": {
                "1": "컴포지트(Composite)",
                "2": "어댑터(Adapter)",
                "3": "추상 팩토리(Abstract Factory)",
                "4": "옵서버(Observer)"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 15,
            "question_type": "multiple_choice",
            "question_description": "아키텍처 설계 과정이 올바른 순서로 나열된 것은?",
            "additional_content": "가. 설계 목표 설정\n나. 시스템 타입 결정\n다. 스타일 적용 및 커스터마이즈\n라. 서브시스템의 기능, 인터페이스 동작 작성\n마. 아키텍처 설계 검토",
            "choices": {
                "1": "가 → 나 → 다 → 라 → 마",
                "2": "가 → 나 → 라 → 다 → 마",
                "3": "가 → 라 → 나 → 다 → 마",
                "4": "가 → 라 → 다 → 나 → 마"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 16,
            "question_type": "multiple_choice",
            "question_description": "사용자 인터페이스를 설계할 경우 고려해야 할 가이드라인과 가장 거리가 먼 것은?",
            "additional_content": null,
            "choices": {
                "1": "심미성을 사용성보다 우선하여 설계해야 한다",
                "2": "효율성을 높이게 설계해야 한다",
                "3": "발생하는 오류를 쉽게 수정할 수 있어야 한다",
                "4": "사용자에게 피드백을 제공해야 한다"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 17,
            "question_type": "multiple_choice",
            "question_description": "소프트웨어 설계에서 자주 발생하는 문제에 대한 일반적이고 반복적인 해결 방법을 무엇이라고 하는가?",
            "additional_content": null,
            "choices": {
                "1": "모듈 분해",
                "2": "디자인 패턴",
                "3": "연관 관계",
                "4": "클래스 도출"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 18,
            "question_type": "multiple_choice",
            "question_description": "객체지향 분석 기법의 하나로 객체 모형, 동적 모형, 기능 모형의 3개 모형을 생성하는 방법은?",
            "additional_content": null,
            "choices": {
                "1": "Wirfs-Block Method",
                "2": "Rumbaugh Method",
                "3": "Booch Method",
                "4": "Jacobson Method"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 19,
            "question_type": "multiple_choice",
            "question_description": "입력되는 데이터를 컴퓨터의 프로세서가 처리하기 전에 미리 처리하여 프로세서가 처리하는 시간을 줄여주는 프로그램이나 하드웨어를 말하는 것은?",
            "additional_content": null,
            "choices": {
                "1": "EAI",
                "2": "FEP",
                "3": "GPL",
                "4": "Duplexing"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 20,
            "question_type": "multiple_choice",
            "question_description": "객체 지향 개념 중 하나 이상의 유사한 객체들을 묶어 공통된 특성을 표현한 데이터 추상화를 의미하는 것은?",
            "additional_content": null,
            "choices": {
                "1": "Method",
                "2": "Class",
                "3": "Field",
                "4": "Message"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 21,
            "question_type": "multiple_choice",
            "question_description": "클린 코드(Clean Code)를 작성하기 위한 원칙으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "추상화 : 하위 클래스/메소드/함수를 통해 애플리케이션의 특성을 간략하게 나타내고, 상세 내용은 상위 클래스/메소드/함수에서 구현한다",
                "2": "의존성 : 다른 모듈에 미치는 영향을 최소화하도록 작성한다",
                "3": "가독성 : 누구든지 읽기 쉽게 코드를 작성한다",
                "4": "중복성 : 중복을 최소화 할 수 있는 코드를 작성한다"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 22,
            "question_type": "multiple_choice",
            "question_description": "단위 테스트에서 테스트의 대상이 되는 하위 모듈을 호출하고, 파라미터를 전달하는 가상의 모듈로 상향식 테스트에 필요한 것은?",
            "additional_content": null,
            "choices": {
                "1": "테스트 스팁(Test Stub)",
                "2": "테스트 드라이버(Test Driver)",
                "3": "테스트 슈트(Test Suites)",
                "4": "테스트 케이스(Test Case)"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 23,
            "question_type": "multiple_choice",
            "question_description": "스택(Stack)에 대한 옳은 내용으로만 나열된 것은?",
            "additional_content": "가. FIFO 방식으로 처리된다\n나. 순서 리스트의 뒤(Rear)에서 노드가 삽입되며, 앞(Front)에서 노드가 제거된다\n다. 선형 리스트의 양쪽 끝에서 삽입과 삭제가 모두 가능한 자료 구조이다\n라. 인터럽트 처리, 서브루틴 호출 작업 등에 응용된다",
            "choices": {
                "1": "가, 나",
                "2": "가, 다",
                "3": "나, 라",
                "4": "다, 라"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 24,
            "question_type": "multiple_choice",
            "question_description": "소프트웨어 모듈화의 장점이 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "오류의 파급 효과를 최소화한다",
                "2": "기능의 분리가 가능하여 인터페이스가 복잡하다",
                "3": "모듈의 재사용 가능으로 개발과 유지보수가 용이하다",
                "4": "프로그램의 효율적인 관리가 가능하다"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 25,
            "question_type": "multiple_choice",
            "question_description": "소프트웨어 프로젝트 관리에 대한 설명으로 가장 옳은 것은?",
            "additional_content": null,
            "choices": {
                "1": "개발에 따른 산출물 관리",
                "2": "소요인력은 최대화하되 정책 결정은 신속하게 처리",
                "3": "주어진 기간은 연장하되 최소의 비용으로 시스템을 개발",
                "4": "주어진 기간 내에 최소의 비용으로 사용자를 만족시키는 시스템을 개발"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 26,
            "question_type": "multiple_choice",
            "question_description": "정형 기술 검토(FTR)의 지침으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "의제를 제한한다",
                "2": "논쟁과 반박을 제한한다",
                "3": "문제 영역을 명확히 표현한다",
                "4": "참가자의 수를 제한하지 않는다"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 27,
            "question_type": "multiple_choice",
            "question_description": "소프트웨어 재공학의 주요 활동 중 기존 소프트웨어 시스템을 새로운 기술 또는 하드웨어 환경에서 사용할 수 있도록 변환하는 작업을 의미하는 것은?",
            "additional_content": null,
            "choices": {
                "1": "Analysis",
                "2": "Migration",
                "3": "Restructuring",
                "4": "Reverse Engineering"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 28,
            "question_type": "multiple_choice",
            "question_description": "정보 시스템 개발 단계에서 프로그래밍 언어 선택 시 고려할 사항으로 가장 거리가 먼 것은?",
            "additional_content": null,
            "choices": {
                "1": "개발 정보 시스템의 특성",
                "2": "사용자의 요구사항",
                "3": "컴파일러의 가용성",
                "4": "컴파일러의 독창성"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 29,
            "question_type": "multiple_choice",
            "question_description": "소프트웨어 패키징에 대한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "개발자 중심의 프로세스로 진행된다",
                "2": "새로 추가되거나 변경된 소스 코드를 식별하고 모듈화한다",
                "3": "고객의 편의를 위해 지속적인 수동/버전 관리를 수행한다",
                "4": "보편적인 환경에서 사용할 수 있도록 일반 배포를 수행한다"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 30,
            "question_type": "multiple_choice",
            "question_description": "다음 중 선형 자료구조가 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "Tree",
                "2": "List",
                "3": "Stack",
                "4": "Deque"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 31,
            "question_type": "multiple_choice",
            "question_description": "매우 오래되어 문서가 없거나 개발자가 없어서 유지보수가 어려운 프로그램을 의미하는 용어는?",
            "additional_content": null,
            "choices": {
                "1": "Title Code",
                "2": "Source Code",
                "3": "Object Code",
                "4": "Alien Code"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 32,
            "question_type": "multiple_choice",
            "question_description": "다음 중 소프트웨어 재사용의 장점과 가장 거리가 먼 것은?",
            "additional_content": null,
            "choices": {
                "1": "생산성 향상",
                "2": "프로젝트 문서 공유",
                "3": "소프트웨어 품질 향상",
                "4": "새로운 개발 방법론의 용이한 도입"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 33,
            "question_type": "multiple_choice",
            "question_description": "다음 중 인터페이스 간 통신에 사용되는 데이터 형식이 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "AJTML",
                "2": "JSON",
                "3": "XML",
                "4": "YAML"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 34,
            "question_type": "multiple_choice",
            "question_description": "프로그램 설계 도표인 NS Chart(Nassi-Shneiderman Chart)에 대한 설명으로 가장 거리가 먼 것은?",
            "additional_content": null,
            "choices": {
                "1": "논리에 중점을 두고 도형을 사용하여 표현한다",
                "2": "이해하기 쉽고 코드 변환이 용이하다",
                "3": "화살표나 GOTO를 사용하여 이해하기 쉽다",
                "4": "순차, 선택, 반복 등의 제어 논리 구조를 표현한다"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 35,
            "question_type": "multiple_choice",
            "question_description": "입력 데이터가 A, B, C, D 순서로 들어오고, 스택 연산이 push, push, pop, push, push, pop, pop, pop 순서로 수행될 때 출력 결과는?",
            "additional_content": null,
            "choices": {
                "1": "BDCA",
                "2": "ABCD",
                "3": "DCBA",
                "4": "CDAB"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 36,
            "question_type": "multiple_choice",
            "question_description": "분할 정복(Divide and Conquer)을 기반으로 하고 피벗을 사용하며, 최악의 경우 n(n-1)/2번의 비교가 필요한 정렬 알고리즘은?",
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
            "category_id": 2,
            "question_number": 37,
            "question_type": "multiple_choice",
            "question_description": "다음 중 화이트박스 테스트 기법에 해당하는 것은?",
            "additional_content": "⑦ Data Flow Testing, ④ Loop Testing, © Equivalence Partitioning, ② Boundary Value Analysis, ◎ Cause-Effect Graphing, ⑥ Error Guessing",
            "choices": {
                "1": "⑦, ④, ©",
                "2": "②, ©, ◎",
                "3": "④, ⑥, ⑦",
                "4": "©, ②, ⑥"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 38,
            "question_type": "multiple_choice",
            "question_description": "소프트웨어 품질과 관련된 국제 표준인 ISO/IEC 25000에 대한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "소프트웨어 품질 평가를 위한 통합 모델이다",
                "2": "SQuaRE로 약칭된다",
                "3": "ISO/IEC 2501n은 내부/외부/사용 품질 측정과 품질 측정 요소를 다룬다",
                "4": "기존의 소프트웨어 품질 평가 모델과 절차(ISO/IEC 9126, ISO/IEC 14598)를 통합한 것이다"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 39,
            "question_type": "multiple_choice",
            "question_description": "코드 검사(Code Inspection)에 대한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "코드를 실행하지 않고 읽어서 시각적으로 검토하는 기법이다",
                "2": "코드 품질 향상을 위한 기법이다",
                "3": "동적 테스트에서만 사용되는 기법이다",
                "4": "결함, 코딩 표준 준수, 효율성 등의 품질 이슈를 검사한다"
            },
            "score": 1
        },
        {
            "category_id": 2,
            "question_number": 40,
            "question_type": "multiple_choice",
            "question_description": "프로젝트 성공을 위해 위험 요소들을 미리 인식하고 분석하여 프로젝트에 미치는 영향을 파악하고, 사전에 예측하고 대비하기 위한 모든 기법과 활동을 포괄하는 용어는?",
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
            "question_number": 41,
            "question_type": "multiple_choice",
            "question_description": "데이터베이스 설계 단계 중 물리적 설계 단계에서 고려할 사항으로 적절하지 않은 것은?",
            "additional_content": null,
            "choices": {
                "1": "스키마 평가 및 정제",
                "2": "응답 시간",
                "3": "저장 공간 효율성",
                "4": "트랜잭션 처리량"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 42,
            "question_type": "multiple_choice",
            "question_description": "SQL의 DELETE 명령어에 대한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "테이블에서 행을 삭제하는 명령어이다",
                "2": "WHERE 절 없이 실행하면 DROP TABLE과 같은 효과를 가진다",
                "3": "SQL에서 DML(Data Manipulation Language)로 분류된다",
                "4": "기본 구문은 'DELETE FROM table [WHERE condition];'이다"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 43,
            "question_type": "multiple_choice",
            "question_description": "릴레이션 R의 모든 조인 종속성이 R의 후보키를 통해서만 만족될 때 릴레이션 R이 속하는 정규형은?",
            "additional_content": null,
            "choices": {
                "1": "5NF",
                "2": "4NF",
                "3": "3NF",
                "4": "1NF"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 44,
            "question_type": "multiple_choice",
            "question_description": "E-R 모델에서 다중값 속성의 표기법은?",
            "additional_content": null,
            "choices": {
                "1": "원형",
                "2": "이중 원형",
                "3": "사각형",
                "4": "마름모"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 45,
            "question_type": "multiple_choice",
            "question_description": "다른 릴레이션의 기본키를 참조하는 키를 의미하는 것은?",
            "additional_content": null,
            "choices": {
                "1": "Field Key",
                "2": "Super Key",
                "3": "Foreign Key",
                "4": "Candidate Key"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 46,
            "question_type": "multiple_choice",
            "question_description": "관계 해석에서 '모든'을 의미하는 논리 기호는?",
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
            "question_number": 47,
            "question_type": "multiple_choice",
            "question_description": "다음 릴레이션의 Degree와 Cardinality는?",
            "additional_content": "**릴레이션 테이블:**\n| 학번 | 이름 | 학년 | 학과 |\n|------|------|------|------|\n| 13001 | 홍길동 | 3학년 | 전기 |\n| 13002 | 이순신 | 4학년 | 기계 |\n| 13003 | 강감찬 | 2학년 | 컴퓨터 |",
            "choices": {
                "1": "Degree: 4, Cardinality: 3",
                "2": "Degree: 3, Cardinality: 4",
                "3": "Degree: 3, Cardinality: 12",
                "4": "Degree: 12, Cardinality: 3"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 48,
            "question_type": "multiple_choice",
            "question_description": "뷰(View)에 대한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "뷰 위에 다른 뷰를 정의할 수 있다",
                "2": "DBA는 보안 목적으로 뷰를 활용할 수 있다",
                "3": "사용자는 자신의 필요에 맞게 정보를 가공하여 뷰를 만들 수 있다",
                "4": "SQL에서 뷰에 대한 INSERT, UPDATE, DELETE 작업에는 제약이 없다"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 49,
            "question_type": "multiple_choice",
            "question_description": "관계 대수식 π 이름 (σ 학과 = '교육'(학생))을 올바르게 표현한 SQL문은?",
            "additional_content": null,
            "choices": {
                "1": "SELECT 학생 FROM 이름 WHERE 학과 = '교육';",
                "2": "SELECT 이름 FROM 학생 WHERE 학과 = '교육';",
                "3": "SELECT 교육 FROM 학과 WHERE 이름 = '학생';",
                "4": "SELECT 학과 FROM 학생 WHERE 이름 = '교육';"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 50,
            "question_type": "multiple_choice",
            "question_description": "정규화 과정에서 A → B이고 B → C일 때 A → C의 이행적 함수 종속성을 제거하는 단계는?",
            "additional_content": null,
            "choices": {
                "1": "1NF → 2NF",
                "2": "2NF → 3NF",
                "3": "3NF → BCNF",
                "4": "BCNF → 4NF"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 51,
            "question_type": "multiple_choice",
            "question_description": "CREATE TABLE 문에서 수행할 수 없는 기능은?",
            "additional_content": null,
            "choices": {
                "1": "속성 타입 변경",
                "2": "속성에 NOT NULL 지정",
                "3": "기본키를 구성하는 속성 지정",
                "4": "CHECK 제약조건 정의"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 52,
            "question_type": "multiple_choice",
            "question_description": "SQL과 관련된 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "REVOKE 키워드는 컬럼명을 재할당하는 데 사용할 수 있다",
                "2": "DDL 명령어는 기본 테이블, 뷰 테이블, 인덱스를 생성, 변경, 삭제하는 데 사용된다",
                "3": "DISTINCT는 중복된 값을 제거하는 데 사용할 수 있다",
                "4": "JOIN은 여러 테이블의 레코드를 결합하는 데 사용할 수 있다"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 53,
            "question_type": "multiple_choice",
            "question_description": "SELECT 급여 FROM 사원; 쿼리를 실행했을 때 생성되는 튜플의 개수는?",
            "additional_content": "**사원 테이블:**\n| 사원ID | 사원명 | 급여 | 부서ID |\n|--------|--------|------|--------|\n| 101 | 박철수 | 30000 | 1 |\n| 102 | 한나라 | 35000 | 2 |\n| 103 | 김감동 | 40000 | 3 |\n| 104 | 이구수 | 35000 | 2 |\n| 105 | 최초록 | 40000 | 3 |",
            "choices": {
                "1": "1",
                "2": "3",
                "3": "4",
                "4": "5"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 54,
            "question_type": "multiple_choice",
            "question_description": "다음 SQL 쿼리에서 BETWEEN 연산자와 동일한 의미를 가지는 표현식은?",
            "additional_content": "```sql\nSELECT *\nFROM 성적\nWHERE (점수 BETWEEN 90 AND 95)\nAND 학과 = '컴퓨터공학과';\n```",
            "choices": {
                "1": "점수 >= 90 AND 점수 <= 95",
                "2": "점수 > 90 AND 점수 < 95",
                "3": "점수 > 90 AND 점수 <= 95",
                "4": "점수 >= 90 AND 점수 < 95"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 55,
            "question_type": "multiple_choice",
            "question_description": "트랜잭션 상태 중 실패한 후 Rollback 작업을 수행한 트랜잭션의 상태는?",
            "additional_content": null,
            "choices": {
                "1": "철회(Aborted)",
                "2": "부분 완료(Partially Committed)",
                "3": "완료(Commit)",
                "4": "실패(Fail)"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 56,
            "question_type": "multiple_choice",
            "question_description": "데이터 제어 언어(DCL)에 대한 설명으로 옳은 것은?",
            "additional_content": null,
            "choices": {
                "1": "ROLLBACK: 데이터 보안과 무결성을 정의한다",
                "2": "COMMIT: 데이터베이스에서 사용자 권한을 취소한다",
                "3": "GRANT: 데이터베이스에서 사용자 권한을 부여한다",
                "4": "REVOKE: 데이터베이스 작업이 비정상적으로 종료될 때 원래 상태로 복원한다"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 57,
            "question_type": "multiple_choice",
            "question_description": "테이블 R과 S에 대해 다음 SQL 쿼리를 실행했을 때 올바른 실행 결과는?",
            "additional_content": "**테이블 R:**\n| A | B |\n|---|----|\n| 1 | A |\n| 3 | B |\n\n**테이블 S:**\n| A | B |\n|---|----|\n| 1 | A |\n| 2 | B |\n\n```sql\nSELECT A FROM R\nUNION ALL\nSELECT A FROM S;\n```",
            "choices": {
                "1": "A: 1, 3",
                "2": "A: 1, 2",
                "3": "A: 1, 3, 1, 2",
                "4": "A: 1, 3, 2"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 58,
            "question_type": "multiple_choice",
            "question_description": "분산 데이터베이스 시스템에 대한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "분산 데이터베이스는 논리적으로는 하나의 시스템이지만 물리적으로는 여러 컴퓨터 사이트에 분산되어 있다",
                "2": "위치 투명성, 복제 투명성, 동시성 투명성, 장애 투명성을 목표로 한다",
                "3": "단점으로는 데이터베이스 설계가 상대적으로 어렵고, 개발 및 처리 비용이 증가한다",
                "4": "분산 데이터베이스 시스템의 주요 구성 요소로는 분산 프로세서, P2P 시스템, 단일 데이터베이스가 있다"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 59,
            "question_type": "multiple_choice",
            "question_description": "두 개의 테이블을 조인하여 V_1 뷰를 만들고, V_1을 사용하여 V_2 뷰를 생성했다. DROP VIEW V_1 CASCADE; 명령을 실행한 결과로 옳은 것은?",
            "additional_content": null,
            "choices": {
                "1": "V_1만 삭제된다",
                "2": "V_2만 삭제된다",
                "3": "V_1과 V_2 모두 삭제된다",
                "4": "V_1과 V_2 모두 삭제되지 않는다"
            },
            "score": 1
        },
        {
            "category_id": 3,
            "question_number": 60,
            "question_type": "multiple_choice",
            "question_description": "데이터베이스에서 동시성 제어의 목적으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "시스템 활용도를 최대화한다",
                "2": "사용자 응답 시간을 최소화한다",
                "3": "데이터베이스 공유를 최소화한다",
                "4": "데이터베이스 일관성을 유지한다"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 61,
            "question_type": "multiple_choice",
            "question_description": "IP 주소체계와 관련한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "IPv6의 패킷 헤더는 32 octet의 고정된 길이를 가진다",
                "2": "IPv6는 주소 자동설정(Auto Configuration) 기능을 통해 손쉽게 이용자의 단말을 네트워크에 접속시킬 수 있다",
                "3": "IPv4는 호스트 주소를 자동으로 설정하며 유니캐스트(Unicast)를 지원한다",
                "4": "IPv4는 클래스별로 네트워크와 호스트 주소의 길이가 다르다"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 62,
            "question_type": "multiple_choice",
            "question_description": "다음 C언어 프로그램이 실행되었을 때, 실행 결과는?",
            "additional_content": "```c\n#include <stdio.h>\n#include <stdlib.h>\nint main(int argc, char* argv[]) {\n    int arr[2][3] = {1,2,3,4,5,6};\n    int (*p)[3] = NULL;\n    p = arr;\n    printf(\"%d, \", *(p[0] + 1) + (p[1] + 2));\n    printf(\"%d\", *(*(p+1)+0)+*(*(p+1)+ 1));\n    return 0;\n}\n```",
            "choices": {
                "1": "7, 5",
                "2": "8, 5",
                "3": "8, 9",
                "4": "7, 9"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 63,
            "question_type": "multiple_choice",
            "question_description": "OSI 7계층 중 데이터링크 계층에 해당되는 프로토콜이 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "HTTP",
                "2": "HDLC",
                "3": "PPP",
                "4": "LLC"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 64,
            "question_type": "multiple_choice",
            "question_description": "C언어에서 두 개의 논리 값 중 하나라도 참이면 1을, 모두 거짓이면 0을 반환하는 연산자는?",
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
            "question_number": 65,
            "question_type": "multiple_choice",
            "question_description": "IPv6에 대한 특성으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "표시방법은 8비트씩 4부분의 10진수로 표시한다",
                "2": "2^128개의 주소를 표현할 수 있다",
                "3": "등급별, 서비스별로 패킷을 구분할 수 있어 품질보장이 용이하다",
                "4": "확장기능을 통해 보안기능을 제공한다"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 66,
            "question_type": "multiple_choice",
            "question_description": "JAVA의 예외(exception)와 관련한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "문법 오류로 인해 발생한 것",
                "2": "오동작이나 결과에 악영향을 미칠 수 있는 실행 시간 동안에 발생한 오류",
                "3": "배열의 인덱스가 그 범위를 넘어서는 경우 발생하는 오류",
                "4": "존재하지 않는 파일을 읽으려고 하는 경우에 발생하는 오류"
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
                "1": "ECP",
                "2": "ARP",
                "3": "ICMP",
                "4": "PPP"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 68,
            "question_type": "multiple_choice",
            "question_description": "좋은 소프트웨어 설계를 위한 소프트웨어의 모듈간의 결합도(Coupling)와 모듈 내 요소 간 응집도(Cohesion)에 대한 설명으로 옳은 것은?",
            "additional_content": null,
            "choices": {
                "1": "응집도는 낮게 결합도는 높게 설계한다",
                "2": "응집도는 높게 결합도는 낮게 설계한다",
                "3": "양쪽 모두 낮게 설계한다",
                "4": "양쪽 모두 높게 설계한다"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 69,
            "question_type": "multiple_choice",
            "question_description": "다음과 같은 형태로 임계 구역의 접근을 제어하는 상호배제 기법은?",
            "additional_content": "```\nP(S): while S <= 0 do skip;\n      S := S - 1;\nV(S): S := S + 1;\n```",
            "choices": {
                "1": "Dekker Algorithm",
                "2": "Lamport Algorithm",
                "3": "Peterson Algorithm",
                "4": "Semaphore"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 70,
            "question_type": "multiple_choice",
            "question_description": "소프트웨어 개발에서 모듈(Module)이 되기 위한 주요 특징에 해당하지 않는 것은?",
            "additional_content": null,
            "choices": {
                "1": "다른 것들과 구별될 수 있는 독립적인 기능을 가진 단위(Unit)이다",
                "2": "독립적인 컴파일이 가능하다",
                "3": "유일한 이름을 가져야 한다",
                "4": "다른 모듈에서의 접근이 불가능해야 한다"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 71,
            "question_type": "multiple_choice",
            "question_description": "빈 기억공간의 크기가 20KB, 16KB, 8KB, 40KB 일 때 기억장치 배치 전략으로 \"Best Fit\"을 사용하여 17KB의 프로그램을 적재할 경우 내부 단편화의 크기는 얼마인가?",
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
            "question_number": 72,
            "question_type": "multiple_choice",
            "question_description": "다음 C언어 프로그램이 실행되었을 때, 실행 결과는?",
            "additional_content": "```c\n#include <stdio.h>\n#include <stdlib.h>\nint main(int argc, char* argv[]) {\n    int i = 0;\n    while (1) {\n        if (i == 4) {\n            break;\n        }\n        i++;\n    }\n    printf(\"%d\", i);\n    return 0;\n}\n```",
            "choices": {
                "1": "0",
                "2": "1",
                "3": "3",
                "4": "4"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 73,
            "question_type": "multiple_choice",
            "question_description": "다음 JAVA 프로그램이 실행되었을 때, 실행 결과는?",
            "additional_content": "```java\npublic class Ape {\n    static void rs(char a[]) {\n        for(int i=0; i < a.length; i++)\n            if(a[i] == 'B')\n                a[i] = 'C';\n            else if(i == a.length - 1)\n                a[i] = a[i-1];\n            else\n                a[i] = a[i+1];\n    }\n\n    static void pca(char a[]) {\n        for(int i = 0; i < a.length; i++)\n            System.out.print(a[i]);\n        System.out.println();\n    }\n\n    public static void main(String[] args) {\n        char c[] = {'A','B', 'D', 'D', 'A', 'B', 'C'};\n        rs(c);\n        pca(c);\n    }\n}\n```",
            "choices": {
                "1": "BCDABCA",
                "2": "BCDABCC",
                "3": "CDDACCC",
                "4": "CDDACCA"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 74,
            "question_type": "multiple_choice",
            "question_description": "개발 환경 구성을 위한 빌드(Build) 도구에 해당하지 않는 것은?",
            "additional_content": null,
            "choices": {
                "1": "Ant",
                "2": "Kerberos",
                "3": "Maven",
                "4": "Gradle"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 75,
            "question_type": "multiple_choice",
            "question_description": "3개의 페이지 프레임을 갖는 시스템에서 페이지 참조 순서가 1, 2, 1, 0, 4, 1, 3 일 경우 FIFO 알고리즘에 의한 페이지 교체의 경우 프레임의 최종 상태는?",
            "additional_content": null,
            "choices": {
                "1": "1, 2, 0",
                "2": "2, 4, 3",
                "3": "1, 4, 2",
                "4": "4, 1, 3"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 76,
            "question_type": "multiple_choice",
            "question_description": "다음 C언어 프로그램이 실행되었을 때, 실행 결과는?",
            "additional_content": "```c\n#include <stdio.h>\n#include <stdlib.h>\nint main(int argc, char* argv[]) {\n    char str1[20] = \"KOREA\";\n    char str2[20] = \"LOVE\";\n    char* p1 = NULL;\n    char* p2 = NULL;\n    p1 = str1;\n    p2 = str2;\n    str1[1] = p2[2];\n    str2[3] = p1[4];\n    strcat(str1, str2);\n    printf(\"%c\", *(p1 + 2));\n    return 0;\n}\n```",
            "choices": {
                "1": "E",
                "2": "V",
                "3": "R",
                "4": "O"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 77,
            "question_type": "multiple_choice",
            "question_description": "다음 Python 프로그램이 실행되었을 때, 실행 결과는?",
            "additional_content": "```python\na = 100\nlist_data = ['a','b','c']\ndict_data = {'a':90, 'b':95}\nprint(list_data[0])\nprint(dict_data['a'])\n```",
            "choices": {
                "1": "a, 90",
                "2": "100, 90",
                "3": "100, 100",
                "4": "a, a"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 78,
            "question_type": "multiple_choice",
            "question_description": "C언어에서 정수 변수 a, b에 각각 1, 2가 저장되어 있을 때 다음 식의 연산 결과로 옳은 것은?",
            "additional_content": "`a < b + 2 && a << 1 <= b`",
            "choices": {
                "1": "0",
                "2": "1",
                "3": "3",
                "4": "5"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 79,
            "question_type": "multiple_choice",
            "question_description": "다음 Python 프로그램이 실행되었을 때, 실행 결과는?",
            "additional_content": "```python\na = [\"대\", \"한\", \"민\", \"국\"]\nfor i in a:\n    print(i)\n```",
            "choices": {
                "1": "대한민국",
                "2": "대\\n한\\n민\\n국"
            },
            "score": 1
        },
        {
            "category_id": 4,
            "question_number": 80,
            "question_type": "multiple_choice",
            "question_description": "UNIX 시스템의 쉘(shell)의 주요 기능에 대한 설명이 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "사용자 명령을 해석하고 커널로 전달하는 기능을 제공한다",
                "2": "반복적인 명령 프로그램을 만드는 프로그래밍 기능을 제공한다",
                "3": "쉘 프로그램 실행을 위해 프로세스와 메모리를 관리한다",
                "4": "초기화 파일을 이용해 사용자 환경을 설정하는 기능을 제공한다"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 81,
            "question_type": "multiple_choice",
            "question_description": "소프트웨어 생명주기 모델 중 나선형 모델(Spiral Model)과 관련한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "소프트웨어 개발 프로세스를 위험 관리(Risk Management) 측면에서 본 모델이다",
                "2": "위험 분석(Risk Analysis)은 반복적인 개발 진행 후 주기의 마지막 단계에서 최종적으로 한 번 수행해야 한다",
                "3": "시스템을 여러 부분으로 나누어 여러 번의 개발 주기를 거치면 시스템이 완성된다",
                "4": "요구사항이나 아키텍처를 이해하기 어렵다거나 중심이 되는 기술에 문제가 있는 경우 적합한 모델이다"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 82,
            "question_type": "multiple_choice",
            "question_description": "정보시스템과 관련한 다음 설명에 해당하는 것은?",
            "additional_content": "• 각 시스템 간에 공유 디스크를 중심으로 클러스터링으로 엮어 다수의 시스템을 동시에 연결할 수 있다\n• 조직, 기업의 기간 업무 서버 안정성을 높이기 위해 사용될 수 있다\n• 여러 가지 방식으로 구현되며 2개의 서버를 연결하는 것으로 2개의 시스템이 각각 업무를 수행하도록 구현하는 방식이 널리 사용된다",
            "choices": {
                "1": "고가용성 솔루션(HACMP)",
                "2": "점대점 연결 방식(Point-to-Point Mode)",
                "3": "스틱스넷(Stuxnet)",
                "4": "루팅(Rooting)"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 83,
            "question_type": "multiple_choice",
            "question_description": "위조된 매체 접근 제어(MAC) 주소를 지속적으로 네트워크로 흘려보내, 스위치 MAC 주소 테이블의 저장 기능을 혼란시켜 더미 허브(Dummy Hub)처럼 작동하게 하는 공격은?",
            "additional_content": null,
            "choices": {
                "1": "Parsing",
                "2": "LAN Tapping",
                "3": "Switch Jamming",
                "4": "FTP Flooding"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 84,
            "question_type": "multiple_choice",
            "question_description": "다음 내용이 설명하는 스토리지 시스템은?",
            "additional_content": "• 하드디스크와 같은 데이터 저장장치를 호스트버스 어댑터에 직접 연결하는 방식\n• 저장장치와 호스트 기기 사이에 네트워크 디바이스 없이 직접 연결하는 방식으로 구성",
            "choices": {
                "1": "DAS",
                "2": "NAS",
                "3": "BSA",
                "4": "NFC"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 85,
            "question_type": "multiple_choice",
            "question_description": "취약점 관리를 위해 일반적으로 수행하는 작업이 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "무결성 검사",
                "2": "응용 프로그램의 보안 설정 및 패치(Patch) 적용",
                "3": "중단 프로세스 및 닫힌 포트 위주로 확인",
                "4": "불필요한 서비스 및 악성 프로그램의 확인과 제거"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 86,
            "question_type": "multiple_choice",
            "question_description": "소프트웨어 생명주기 모델 중 V 모델과 관련한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "요구 분석 및 설계단계를 거치지 않으며 항상 통합 테스트를 중심으로 V 형태를 이룬다",
                "2": "Perry에 의해 제안되었으며 세부적인 테스트 과정으로 구성되어 신뢰도 높은 시스템을 개발하는데 효과적이다",
                "3": "개발 작업과 검증 작업 사이의 관계를 명확히 들어내 놓은 폭포수 모델의 변형이라고 볼 수 있다",
                "4": "폭포수 모델이 산출물 중심이라면 V 모델은 작업과 결과의 검증에 초점을 둔다"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 87,
            "question_type": "multiple_choice",
            "question_description": "블루투스(Bluetooth) 공격과 해당 공격에 대한 설명이 올바르게 연결된 것은?",
            "additional_content": null,
            "choices": {
                "1": "블루버그(BlueBug) - 블루투스의 취약점을 활용하여 장비의 파일에 접근하는 공격으로 OPP를 사용하여 정보를 열람",
                "2": "블루스나프(BlueSnarf) - 블루투스를 이용해 스팸처럼 명함을 익명으로 퍼뜨리는 것",
                "3": "블루프린팅(BluePrinting) - 블루투스 공격 장치의 검색 활동을 의미",
                "4": "블루재킹(BlueJacking) - 블루투스 장비사이의 취약한 연결 관리를 악용한 공격"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 88,
            "question_type": "multiple_choice",
            "question_description": "DoS(Denial of Service) 공격과 관련한 내용으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "Ping of Death 공격은 정상 크기보다 큰 ICMP 패킷을 작은 조각(Fragment)으로 쪼개어 공격 대상이 조각화 된 패킷을 처리하게 만드는 공격 방법이다",
                "2": "Smurf 공격은 멀티캐스트(Multicast)를 활용하여 공격 대상이 네트워크의 임의의 시스템에 패킷을 보내게 만드는 공격이다",
                "3": "SYN Flooding은 존재하지 않는 클라이언트가 서버별로 한정된 접속 가능 공간에 접속한 것처럼 속여 다른 사용자가 서비스를 이용하지 못하게 하는 것이다",
                "4": "Land 공격은 패킷 전송 시 출발지 IP주소와 목적지 IP주소 값을 똑같이 만들어서 공격 대상에게 보내는 공격 방법이다"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 89,
            "question_type": "multiple_choice",
            "question_description": "다음 설명에 해당하는 시스템은?",
            "additional_content": "• 1990년대 David Clock이 처음 제안하였다\n• 비정상적인 접근의 탐지를 위해 의도적으로 설치해 둔 시스템이다\n• 침입자를 속여 실제 공격당하는 것처럼 보여줌으로써 크래커를 추적 및 공격기법의 정보를 수집하는 역할을 한다\n• 쉽게 공격자에게 노출되어야 하며 쉽게 공격이 가능한 것처럼 취약해 보여야 한다",
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
            "question_description": "다음이 설명하는 IT 기술은?",
            "additional_content": "• 컨테이너 응용프로그램의 배포를 자동화하는 오픈소스 엔진이다\n• 소프트웨어 컨테이너 안에 응용 프로그램들을 배치시키는 일을 자동화해 주는 오픈 소스 프로젝트이자 소프트웨어로 볼 수 있다",
            "choices": {
                "1": "Stack Guard",
                "2": "Docker",
                "3": "Cipher Container",
                "4": "Scytale"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 91,
            "question_type": "multiple_choice",
            "question_description": "간트 차트(Gantt Chart)에 대한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "프로젝트를 이루는 소작업 별로 언제 시작되고 언제 끝나야 하는지를 한 눈에 볼 수 있도록 도와준다",
                "2": "자원 배치 계획에 유용하게 사용된다",
                "3": "CPM 네트워크로부터 만드는 것이 가능하다",
                "4": "수평 막대의 길이는 각 작업(Task)에 필요한 인원수를 나타낸다"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 92,
            "question_type": "multiple_choice",
            "question_description": "Python 기반의 웹 크롤링(Web Crawling) 프레임워크로 옳은 것은?",
            "additional_content": null,
            "choices": {
                "1": "Li-fi",
                "2": "Scrapy",
                "3": "CrawlCat",
                "4": "SBAS"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 93,
            "question_type": "multiple_choice",
            "question_description": "Secure 코딩에서 입력 데이터의 보안 약점과 관련한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "SQL 삽입 : 사용자의 입력 값 등 외부 입력 값이 SQL 쿼리에 삽입되어 공격",
                "2": "크로스사이트 스크립트 : 검증되지 않은 외부 입력 값에 의해 브라우저에서 악의적인 코드가 실행",
                "3": "운영체제 명령어 삽입 : 운영체제 명령어 파라미터 입력 값이 적절한 사전검증을 거치지 않고 사용되어 공격자가 운영체제 명령어를 조작",
                "4": "자원 삽입 : 사용자가 내부 입력 값을 통해 시스템 내에 사용이 불가능한 자원을 지속적으로 입력함으로써 시스템에 과부하 발생"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 94,
            "question_type": "multiple_choice",
            "question_description": "Windows 파일 시스템인 FAT와 비교했을 때의 NTFS의 특징이 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "보안에 취약",
                "2": "대용량 볼륨에 효율적",
                "3": "자동 압축 및 안정성",
                "4": "저용량 볼륨에서의 속도 저하"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 95,
            "question_type": "multiple_choice",
            "question_description": "DES는 몇 비트의 암호화 알고리즘인가?",
            "additional_content": null,
            "choices": {
                "1": "8",
                "2": "24",
                "3": "64",
                "4": "132"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 96,
            "question_type": "multiple_choice",
            "question_description": "리눅스에서 생성된 파일 권한이 644일 경우 umask 값은?",
            "additional_content": null,
            "choices": {
                "1": "022",
                "2": "666",
                "3": "777",
                "4": "755"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 97,
            "question_type": "multiple_choice",
            "question_description": "다음 내용이 설명하는 로그 파일은?",
            "additional_content": "• 리눅스 시스템에서 사용자의 성공한 로그인/로그아웃 정보기록\n• 시스템의 종료/시작 시간 기록",
            "choices": {
                "1": "tapping",
                "2": "xtslog",
                "3": "linuxer",
                "4": "wtmp"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 98,
            "question_type": "multiple_choice",
            "question_description": "상향식 비용 산정 기법 중 LOC(원시 코드 라인 수) 기법에서 예측치를 구하기 위해 사용하는 항목이 아닌 것은?",
            "additional_content": null,
            "choices": {
                "1": "낙관치",
                "2": "기대치",
                "3": "비관치",
                "4": "모형치"
            },
            "score": 1
        },
        {
            "category_id": 5,
            "question_number": 99,
            "question_type": "multiple_choice",
            "question_description": "OSI 7 Layer 전 계층의 프로토콜과 패킷 내부의 콘텐츠를 파악하여 침입 시도, 해킹 등을 탐지하고 트래픽을 조정하기 위한 패킷 분석 기술은?",
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
            "question_number": 100,
            "question_type": "multiple_choice",
            "question_description": "소프트웨어 개발 방법론의 테일러링(Tailoring)과 관련한 설명으로 틀린 것은?",
            "additional_content": null,
            "choices": {
                "1": "프로젝트 수행 시 예상되는 변화를 배제하고 신속히 진행하여야 한다",
                "2": "프로젝트에 최적화된 개발 방법론을 적용하기 위해 절차, 산출물 등을 적절히 변경하는 활동이다",
                "3": "관리 측면에서의 목적 중 하나는 최단기간에 안정적인 프로젝트 진행을 위한 사전 위험을 식별하고 제거하는 것이다",
                "4": "기술적 측면에서의 목적 중 하나는 프로젝트에 최적화된 기술 요소를 도입하여 프로젝트 특성에 맞는 최적의 기법과 도구를 사용하는 것이다"
            },
            "score": 1
        }
    ]
} 
enum QuestionType {
  General = "General",
  College = "College",
  SeniorHighSchool = "Senior High School",
  JuniorHighSchool = "Junior High School",
  Elementary = "Elementary",
}

const GeneralQuestionsList = [
  "How can I check my grades?",
  "How can I get a student ID card?",
  "How can I get a copy of my study load?",
  "How can I view my tuition fee breakdown?",
  "How can I pay my tuition fee online?",
  "How can I get a refund for an overpayment?",
  "How can I apply for financial aid or scholarships at CIT University?",
  "What are the requirements for enrolling in Elementary?",
  "What are the requirements for enrolling in Junior High School?",
  "What are the requirements for enrolling in Senior High School?",
  "What are the requirements for enrolling in College?",
  "How can I apply for admission to CIT University?",
  "How do I register for classes at CIT University?",
  "What are the office hours of ETO?",
  "What are the requirements for admission to CIT University?",
];

const CollegeQuestionsList = [
  "When does the next semester's college enrollment begin?",
  "What are the requirements for enrolling in College?",
  "Do you accept transferees for college?",
  "How to enroll if I am a RETURNEE?",
  "How much is the tuition for any program in College?",
  "What are the scholarships that you offer in College",
  "What are the requirements of non-academic scholarships in College?",
  "What are the courses and programs offered in College?",
  "Can you give me the Prospectus for College?",
  "Can you give me the School calendar for College?",
  "Can you give me the College Examination Schedule?",
  "Do you have a dormitory in your University?",
];

const SeniorHighSchoolQuestionsList = [
  "When will be the enrollment for Senior High School?",
  "What are the requirements for enrolling in Senior High School?",
  "Do you accept transferees in Senior High School?",
  "What are the strands offered in Senior High School?",
  "How much is the tuition fee for Senior High School?",
  "What are the available scholarships that you offer in Senior High School?",
  "Can you give me the Senior High Examination Schedule?",
];

const JuniorHighSchoolQuestionsList = [
  "When will be the enrollment for Junior High School?",
  "What are the requirements for enrolling in Junior High School?",
  "What are the scholarships a Junior High School (JHS) student can avail?",
  "How much is the tuition fee for Junior High School?",
  "Can you give me the School calendar for Junior High School?",
  "Can you give me the Junior High Examination Schedule?",
];

const ElementaryQuestionsList = [
  "When will be the enrollment for Elementary?",
  "What are the requirements for enrolling in Elementary?",
  "Do you accept transferees in Elementary?",
  "How much is the tuition fee for Elementary",
  "How much does the books cost for Elementary?",
  "Can you give me the School calendar for Elementary?",
  "Can you give me the Elementary Examination Schedule?",
];

export const QuestionsList: { readonly [key in QuestionType]: string[] } = {
  [QuestionType.General]: GeneralQuestionsList,
  [QuestionType.College]: CollegeQuestionsList,
  [QuestionType.SeniorHighSchool]: SeniorHighSchoolQuestionsList,
  [QuestionType.JuniorHighSchool]: JuniorHighSchoolQuestionsList,
  [QuestionType.Elementary]: ElementaryQuestionsList,
};

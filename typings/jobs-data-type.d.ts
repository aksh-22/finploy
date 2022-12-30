interface requiredSkillsItemType {}

interface minSalaryType {}

interface maxSalaryType {}

interface preferedCountryItemType {}

interface languagesItemType {}

interface interviewProcessItemType {}

interface screeningQuestionsItemType {}

interface referalCommisionType {}

export interface jobsElementItemType {
  _id: string;
  employerId: string;
  uploadStatus: number;
  title: string;
  description: string;
  attachments: string;
  timeZone: string;
  requiredSkills: Array<requiredSkillsItemType>;
  salaryCurrency: string;
  minSalary: minSalaryType;
  maxSalary: maxSalaryType;
  preferedCountry: Array<preferedCountryItemType>;
  languages: Array<languagesItemType>;
  interviewProcess: Array<interviewProcessItemType>;
  screeningQuestions: Array<screeningQuestionsItemType>;
  isIntroRequired: boolean;
  referalCommision: referalCommisionType;
  isActive: boolean;
  isDeleted: boolean;
  isFeatured: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
  id: string;
}

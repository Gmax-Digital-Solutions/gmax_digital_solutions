import QuestionPage from "@/components/audit/QuestionPage";
import { auditQuestions } from "@/lib/audit/auditQuestion";

export default function Page() {
  const question = auditQuestions[4]; // Get the fifth question (q5)
  return <QuestionPage question={question} />;
}

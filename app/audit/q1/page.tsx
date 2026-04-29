import QuestionPage from "@/components/audit/QuestionPage";
import { auditQuestions } from "@/lib/audit/auditQuestion";

export default function Page() {
  const question = auditQuestions[0]; // Get the first question (q1)
  return <QuestionPage question={question} />;
}

import QuestionPage from "@/components/audit/QuestionPage";
import { auditQuestions } from "@/lib/audit/auditQuestion";

export default function Page() {
  const question = auditQuestions[1]; // Get the second question (q2)
  return <QuestionPage question={question} />;
}

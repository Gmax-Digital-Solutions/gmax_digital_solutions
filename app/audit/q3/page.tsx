import QuestionPage from "@/components/audit/QuestionPage";
import { auditQuestions } from "@/lib/audit/auditQuestion";

export default function Page() {
  const question = auditQuestions[2]; // Get the third question (q3)
  return <QuestionPage question={question} />;
}

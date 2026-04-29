import QuestionPage from "@/components/audit/QuestionPage";
import { auditQuestions } from "@/lib/audit/auditQuestion";

export default function Page() {
  const question = auditQuestions[6]; // Get the sixth question (q6)
  return <QuestionPage question={question} />;
}

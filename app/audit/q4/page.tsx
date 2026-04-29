import QuestionPage from "@/components/audit/QuestionPage";
import { auditQuestions } from "@/lib/audit/auditQuestion";

export default function Page() {
  const question = auditQuestions[3]; // Get the fourth question (q4)
  return <QuestionPage question={question} />;
}

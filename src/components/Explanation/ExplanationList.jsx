import {
  MdOutlineLightbulb,
  MdAlarm,
  MdOutlineRemoveRedEye,
} from "react-icons/md";

const ExplanationList = [
  {
    icon: <MdOutlineLightbulb />,
    title: "어떻게 사용하나요?",
    content:
      "파일을 상자 안으로 드래그 앤 드롭하거나 파일 선택 버튼을 클릭해서 업로드할 파일을 검색합니다. 파일은 즉시 업로드되며, 오직 .csv, .xlsx, .xls 형식의 파일만 업로드할 수 있습니다. 수정을 바라는 모든 파일을 입력 후 분석하기 버튼을 눌러주십시오.",
  },
  {
    icon: <MdAlarm />,
    title: "무엇을 위해 사용하나요?",
    content:
      "이 프로그램은 화상 통화 프로그램 줌의 결과를 추출하기 위한 프로그램입니다. 미팅의 주최자가 미팅에 누가 얼마나 오랫동안 참여하였는지 판단하고, 기준이 되는 횟수와 시간을 받아 온라인 참가의 이수 여부를 확인합니다.",
  },
  {
    icon: <MdOutlineRemoveRedEye />,
    title: "왜 사용하나요?",
    content:
      "줌에서 제공하는 기본적인 로그는 미팅 도중 참여자가 나갔다가 들어오는 경우 별개의 사용자로 인식하여 로그가 여러 번 찍히고, 일정 시간 이상 머무른 참가자를 구분해내기 위해 직접 눈으로 파악해야하는 문제가 있습니다.",
  },
];

export default ExplanationList;

import { useState } from "react";
import styled from "styled-components";
import { Dialog } from "../dialog";
import { TextInput } from "../text-input";

const DialogContentContainer = styled.div`
  padding: 24px 0;
`;

const DialogContent = ({
  stage,
  phoneNumber,
  code,
  onPhoneNumberChange,
  onCodeChange,
}: {
  stage: "phone" | "code";
  phoneNumber: string;
  code: string;
  onPhoneNumberChange: (phoneNumber: string) => void;
  onCodeChange: (code: string) => void;
}) => {
  return (
    <DialogContentContainer>
      {stage === "phone" ? (
        <TextInput
          value={phoneNumber}
          label="Номер телефона"
          placeholder="+7-228-148-822"
          onChange={onPhoneNumberChange}
        />
      ) : (
        <TextInput
          value={code}
          label="Код из смс"
          onChange={onCodeChange}
          placeholder="0000"
        />
      )}
    </DialogContentContainer>
  );
};

export const LoginDialog = ({ onClose }: { onClose: () => void }) => {
  const [stage, setStage] = useState<"phone" | "code">("phone");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [code, setCode] = useState("");

  const getPhoneMask = (text: string) => {
    let maskedPhoneNumber = "";

    if (text.length === 1 && text[0] === "+") {
      maskedPhoneNumber = "+";
    }

    const numbers =
      text.replace(/\D/g, "").match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,4})/) ||
      [];

    if (numbers[1] === "7" || numbers[1] === "8") {
      maskedPhoneNumber = "+7";
    }

    if (numbers[1] === "9") {
      const nineCaseNumber =
        text.replace(/\D/g, "").match(/(\d{0,3})(\d{0,3})(\d{0,4})/) || [];
      maskedPhoneNumber = "+7 (";
      maskedPhoneNumber += nineCaseNumber[1];
      if (nineCaseNumber[2][0]) maskedPhoneNumber += `) ${nineCaseNumber[2]}`;
      if (nineCaseNumber[3][0]) maskedPhoneNumber += `-${nineCaseNumber[3]}`;
      setPhoneNumber(maskedPhoneNumber);
      return;
    }

    if (numbers[2][0]) maskedPhoneNumber += ` (${numbers[2]}`;
    if (numbers[3][0]) maskedPhoneNumber += `) ${numbers[3]}`;
    if (numbers[4][0]) maskedPhoneNumber += `-${numbers[4]}`;

    setPhoneNumber(maskedPhoneNumber);
  };

  return (
    <Dialog
      title="Вход"
      onClose={onClose}
      onApply={() => {
        if (stage === "phone") setStage("code");
        if (stage === "code") onClose();
      }}
      onApplyButtonText="Продолжить"
    >
      <DialogContent
        stage={stage}
        phoneNumber={phoneNumber}
        code={code}
        onCodeChange={setCode}
        onPhoneNumberChange={getPhoneMask}
      />
    </Dialog>
  );
};

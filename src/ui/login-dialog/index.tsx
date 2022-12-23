import { useState } from "react";
import styled from "styled-components";
import { Dialog } from "../dialog";
import { PhoneInput, TextInput } from "../text-input";

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
        <PhoneInput
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

  return (
    <Dialog
      title="Вход"
      onClose={onClose}
      onApply={() => {
        if (stage === "phone") setStage("code");
        if (stage === "code") onClose();
      }}
      isApplyDisabled={
        stage === "phone"
          ? phoneNumber.length === 0 ||
            (phoneNumber.startsWith("+7 (") &&
              phoneNumber.replace(/\D/g, "").length !== 11)
          : code.length !== 4
      }
      onApplyButtonText="Продолжить"
    >
      <DialogContent
        stage={stage}
        phoneNumber={phoneNumber}
        code={code}
        onCodeChange={setCode}
        onPhoneNumberChange={setPhoneNumber}
      />
    </Dialog>
  );
};

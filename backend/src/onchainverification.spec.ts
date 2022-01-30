import { ethers } from 'ethers';

describe("signature verification", () => {
    const TEST_PRIV_KEY = "0x000d2Eca8A7d87D977392B7d93649aEc1f28d99B";
    const ethersSigner = new ethers.Wallet(TEST_PRIV_KEY);

    it("verify a message w/ challenge from backend", async () => {
        let numberOfTrial = 0;
        let verifCount = 0;
        let numberOfLogin = 0;
        const userMustSignThisMessage = `${Date.now()/1000000}`;
        const expectedSignerAddress = "0x8e84772c5D726601De2e067037A5713fc5DfAa26aasdasdasdasdad";
        const signedMsg = await ethersSigner.signMessage(userMustSignThisMessage);
        console.log(signedMsg)
        function backendVerify(msg, signature, expectedAddress) {
            const signerAddress = ethers.utils.verifyMessage(msg,signature)
            numberOfTrial = numberOfTrial + 1;
            console.log(signerAddress)
            console.log(expectedSignerAddress)
            if (signerAddress == expectedAddress && verifCount < 1) {
                numberOfLogin = numberOfLogin + 1;
                verifCount = verifCount + 1;
            }
        }

        backendVerify(userMustSignThisMessage, signedMsg, expectedSignerAddress); 

        expect(verifCount).toEqual(1);
        expect(numberOfTrial).toEqual(2);
        expect(numberOfLogin).toEqual(1);
    })
})
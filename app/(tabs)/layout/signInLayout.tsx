import { Image, Keyboard, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { styleGlobal } from "../css/cssGlobal";
import { styleSignIn } from "../css/cssSignIn";
import InputBox from "@/components/other/inputBox";
import { useState } from "react";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import ButtonBox from "@/components/other/buttonBox";
import LineSign from "@/components/other/lineSign";
import LoginGoogleBtn from "@/components/other/loginGoogleBtn";
import QuizAcc from "@/components/other/quizAccount";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import SignUpLayout from "./signUpLayout";
const SignInLayout = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    //chuyen trang
    const naigation: NavigationProp<RootStackParamList> = useNavigation();
    const moveSignUp = () => {
        naigation.navigate("signUp");
    }

    const moveForgetPassword = () => {
        naigation.navigate("forgetPassword");
    }

    const submitSignIn = () => {
        alert("Email: " + email + "; Password: "+password);
    }


    //ham doi trang thai Toggle
    const [isOnToggle, setIsOnToggle] = useState(true);
    const handleToggle = () => {
        {isOnToggle? setIsOnToggle(false) : setIsOnToggle(true) }
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styleSignIn.signIn}>
            {/* logo app */}
            <Image style={styleSignIn.logoApp} source={require("@/images/png/logoApp.png")}></Image>

            {/* nhap tai khoan va mat khau */}
            <View style={styleSignIn.ViewInput}>
                <InputBox variable={email} namePlaceholder="Email" onChangeText={setEmail} isPass={false} />
                <InputBox variable={password} namePlaceholder="Password" onChangeText={setPassword} isPass={true} />
            </View>

            {/* lua chon khac gom: luu mat khau va quen mat khau */}
            <View style={styleSignIn.lineOtherChoice}>
                <View style={styleSignIn.viewRemember}>
                    {isOnToggle && (<FontAwesome6 style={styleSignIn.iconToggle} name="toggle-on" size={24} color="#B3B3B3" onPress={handleToggle}/>) }
                    {!isOnToggle && (<FontAwesome6 style={styleSignIn.iconToggle} name="toggle-off" size={24} color="#B3B3B3" onPress={handleToggle}/>) }
                    <Text style={styleSignIn.textSignIn} >Remember Password</Text>
                </View>
                <TouchableOpacity onPress={moveForgetPassword}><Text style={styleSignIn.textSignIn}>Forget PassWord</Text></TouchableOpacity>
            </View>

            {/* nut dang nhap bang tai khoan hoac bang google */}
            <View style={styleSignIn.viewButton}>
                <ButtonBox name="Sign In" background= "#459DE4" funVoid={submitSignIn} border={0} colorText="#FFFDFD"/>
                <LineSign haveAccount={true}/>
                <LoginGoogleBtn funVoid={handleToggle}/>
            </View>

            {/* chuyen sang dang ki */}
            <View style={styleSignIn.lineQuiz}>
                <QuizAcc haveAccount={false} funVoid={moveSignUp}/>
            </View>
        </View>
        </TouchableWithoutFeedback>
    )
}

export default SignInLayout;
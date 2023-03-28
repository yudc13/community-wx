import { Component, PropsWithChildren } from "react";
import { View, Text } from "@tarojs/components";
import "./index.less";
import Taro from "@tarojs/taro";

export default class Index extends Component<PropsWithChildren> {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="index font-bold text-gray-600 text-base">
        <Text
          onClick={() => {
            Taro.navigateTo({ url: "/pages/login/index" });
          }}
        >
          Hello world!
        </Text>
      </View>
    );
  }
}

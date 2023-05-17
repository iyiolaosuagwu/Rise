import { StyleSheet } from "react-native";

export const Onboardingstyles = StyleSheet.create({
  onboardingImage: {
    width: 300,
    height: 300,
  },
  imageAndDotsWrap: {
    alignItems: "center",
    flex: 1,
  },
  onboardingImageWrap: {
    flex: 1,
    justifyContent: "center",
  },
  headerAndInfoWrap: {
    marginBottom: 34,
    marginTop: 48,
  },
  onboardingHeader: {
    fontSize: 20,
    fontFamily: "DMmedium",
  },

  onboardingHeaderInfo: {
    fontSize: 15,
    fontFamily: "DMregular",
    color: "#222222",
    marginTop: 12,
    lineHeight: 22,
  },
  animatedDotsWrap: {
    flexDirection: "row",
    marginTop: 25,
  },
  animatedDots: {
    height: 5,
    width: 5,
    marginRight: 6,
    borderRadius: 5,
  },

  onboardingBtns: {
    flex: 0.3,
    paddingHorizontal: 24,
  },
  prevBtnBg: {
    paddingHorizontal: 16,
    paddingTop: 18,
    paddingBottom: 20,
    backgroundColor: "rgba(113, 135, 156, 0.1)",
    borderRadius: 5,
  },
  nextBtnBg: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(113, 135, 156, 0.1)",
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 5,
  },
  nextBtnText: {
    marginRight: 26,
    fontFamily: "DMbold",
    fontSize: 15,
  },
});

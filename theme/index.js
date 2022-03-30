// Default App FontFamily
export const appFont = "Inter-Regular";

// Default App Colors

export const colors = {
  active: "#BADCC0",
  inactive: "#B4B4B4",
  primary: "#212121",
  secondary: "#A5A5A5",
  appBackground: "#FFF",
  ratings: "#F7CE61",
  tile: "#F2F4F4",
  light: "#888",
  buttonPrimary: "#BADCC0",
  lightGrey: "#F5F5F5",
  danger: "#DC6054",
  white: "#FFF",
};

// Default App UI

export const ui = {
  container: {
    backgroundColor: colors.appBackground,
    width: "100%",
    height: "100%",
    padding: 15,
  },
  metaContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  activityListTouchable: {
    marginBottom: 20,
  },
  activityListContainer: {
    height: "auto",
    overflow: "hidden",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.tile,
    padding: 15,
  },
  activityProfileContainer: {
    backgroundColor: "#FFF",
    padding: 15,
  },
  activityListImage: {
    width: 120,
    height: 100,
    borderRadius: 10,
    marginRight: 15,
  },
  activityListDescription: {
    flexDirection: "column",
    justifyContent: "flex-start",
    height: "100%",
    flex: 1,
  },
  activityListTitle: {
    color: "#fff",
    fontFamily: appFont,
    fontSize: 26,
    fontWeight: "bold",
    bottom: 10,
    left: 5,
  },
  categoryListContainer: {
    height: 250,
    overflow: "hidden",
    borderRadius: 20,
  },
  categoryListText: {
    color: "#fff",
    fontFamily: appFont,
    fontSize: 32,
    fontWeight: "700",
    fontStyle: "italic",
    position: "absolute",
    bottom: 30,
    left: 30,
  },
  categoryListImage: {
    flex: 1,
    justifyContent: "center",
    overflow: "hidden",
  },
  categoryListBackground: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 200,
  },
  touchableContainer: {
    borderRadius: 20,
    marginBottom: 20,
  },
  avatar: {
    width: 150,
    height: 150,
    borderWidth: 1,
    borderRadius: 150 / 2,
    marginBottom: 30,
    backgroundColor: colors.light,
  },
  centerAlign: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    backgroundColor: colors.appBackground,
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 10,
    height: 56,
    width: "100%",
    justifyContent: "center",
  },
  separator: {
    marginVertical: 20,
    borderBottomColor: colors.tile,
    borderBottomWidth: 1,
  },
  buttonIconContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 56,
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: colors.light,
    backgroundColor: colors.lightGrey,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingTop: 20,
    paddingBottom: 10,
    paddingHorizontal: 15,
    fontFamily: appFont,
    fontSize: 16,
    marginBottom: 30,
  },
  searchBox: {
    height: 56,
    width: "100%",
    backgroundColor: colors.lightGrey,
    borderRadius: 10,
    paddingHorizontal: 20,
    fontFamily: appFont,
    fontSize: 18,
    marginBottom: 50,
    flexDirection: "row",
    alignItems: "center",
  },
  basicInput: {
    width: "95%",
    height: "100%",
    fontFamily: appFont,
    fontSize: 18,
  },
  featureImage: {
    width: "100%",
    height: 200,
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 15,
  },
  profileHeaderContainer: {
    paddingHorizontal: 15,
    paddingVertical: 30,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGrey,
  },
};

// Default App Text

export const text = {
  title: {
    fontFamily: appFont,
    fontSize: 50,
    fontStyle: "italic",
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 40,
    paddingVertical: 15,
    color: colors.primary,
  },
  mediumTitle: {
    fontFamily: appFont,
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 5,
  },
  body: {
    fontFamily: appFont,
    fontSize: 18,
    color: colors.primary,
  },
  inputLabel: {
    fontFamily: appFont,
    fontSize: 18,
    color: colors.primary,
    marginBottom: 5,
  },
  medium: {
    fontFamily: appFont,
    fontSize: 16,
    color: colors.primary,
    marginBottom: 5,
  },
  subtitle: {
    fontFamily: appFont,
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: colors.primary,
  },
  sectionTitle: {
    fontFamily: appFont,
    fontSize: 34,
    fontWeight: "bold",
    fontStyle: "italic",
    marginBottom: 24,
    color: colors.primary,
  },
  sectionTitleAlt: {
    fontFamily: appFont,
    fontSize: 34,
    fontWeight: "bold",
    color: colors.primary,
  },
  profileSectionTitle: {
    fontFamily: appFont,
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 20,
    marginTop: 20,
    color: colors.light,
  },

  meta: {
    marginLeft: 4,
    fontFamily: appFont,
    fontSize: 16,
    color: colors.light,
  },
  buttonLabel: {
    fontSize: 15,
    fontWeight: "bold",
    fontFamily: appFont,
    color: colors.primary,
    textAlign: "center",
    textTransform: "uppercase",
  },
};

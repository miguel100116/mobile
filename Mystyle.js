import React from "react";
import { StyleSheet } from "react-native";

export const Mystyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff7e7",
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },

  input: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: "black",
    marginBottom: 60,
  },

  box: {
    width: 340,
    padding: 20,
    borderColor: "black",
  },

  logo: {
    height: 90,
    width: 80,
    borderRadius: 10,
    marginBottom: 40,
    alignSelf: "center",
  },

  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    paddingVertical: 20,
  },

  // DASHBOARD DESIGN
  containerDashbord: {
    flex: 1,
    backgroundColor: "#EEECDE",
  flexDirection: "row"
  },

  header: {
    width: "100%",
    backgroundColor: "#EEECDE",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginTop:40,
  },

  logo: {
    height: 80,
    width: 100,
    resizeMode: "contain",
  },

  // CONTACT US SECTION
  contactContainer: {
    backgroundColor: "#40587C",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    marginTop: 30,
    alignItems: "center",
  },

  contactTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginBottom: 10,
  },

  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "70%",
  },

  contactIcon: {
    backgroundColor: "#0B2447",
    padding: 15,
    borderRadius: 10,
  },

  // BUTTONS SECTION
  buttonContainer: {
    marginTop: 20,
    width:'100%',
    alignItems:"center",
  },

  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#001C5C",
    width:"85%",
    padding: 50,
    borderRadius: 20,
    marginVertical: 10,
  },

  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
  },

  // SIDE NAVIGATION BAR
  sideNavContainer: {
    position: "absolute",
    right: 0, // Move sidebar to the right
    top: 0,
    width: 250,
    height: "100%",
    backgroundColor: "#001C5C",
    paddingTop: 40,
    paddingHorizontal: 20,
    justifyContent: "flex-start",
  },
  
  sideNavCloseButton: {
    alignSelf: "flex-end",
    marginBottom: 20,
  },
  
  sideNavItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
  },
  
  sideNavText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
  },
  
  logoutButton: {
    marginTop: 30,
    padding: 10,
    backgroundColor: "#FF4444",
    borderRadius: 10,
    alignItems: "center",
  },
  
  logoutText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },

  //PROFILE CSS
  containerProfile: {
    flex: 1,
    backgroundColor: "#EEECDE",
    alignItems: "center",
  },
  headerProfile: {
    backgroundColor: "#001C5C",
    width: "100%",
    height: 280,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 50,
  },
  backButton: {
    position: "absolute",
    left: 20,
    top: 50,
  },
  headerText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  profilePictureContainer: {
    position: "absolute",
    top: 150,
    alignItems: "center",
  },
  profileIcon: {
    backgroundColor: "transparent",
  },
  form: {
    width: "90%",
    marginTop: 80,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#888",
    fontSize: 16,
    paddingVertical: 10,
    marginBottom: 20,
    color: "#333",
  },
  logoutButton: {
    backgroundColor: "#001C5C",
    width: "80%",
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: "center",
    marginTop: 30,
  },
  logoutText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

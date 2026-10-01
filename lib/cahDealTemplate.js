// Content duplicated from the "CAH PDQ Tracker" canvas:
// https://eleoshealth.slack.com/docs/TR189AKMX/F0C32VDV5DJ
//
// Used for channels prefixed "deal-pac" or "deal-cah" instead of the
// general PDQ template.

const CAH_DEAL_CHANNEL_TEMPLATE = `# 📋 SE Overview – CAH PDQ Tracker

## 👥 The Team

* **AE:**
* **SE:**
* **Implementation Manager:**

## 🤓 Technical Champion:

* **Name & Title:**

## 🏎️ Tech Win Criteria:

## ⚠️ Current Blocker:

## 🧑‍🤝‍🧑 Customer Personas

* **Clinical Leads:**
* **IT / Admin:**

## 📄 Outstanding PDQ Items

### **Census & Staff**

* ADC (HO) / Census (HH) 
* Business lines 

### **EHR & Documentation**

* Vendor / Product Name 
* Web-based or On-premise (accessed through browser) 
* Review number of note templates: SOC and revisit for RN, PT, or OT for HH, RN for HO 

### **IT Setup & Security**

* Devices used 
* Browsers used if laptop 
* Single Sign-on (SSO) IDP provider (email provider) 
* How staff access EHR (different settings; VPNs, Firewalls) 
* Remote Desktop timeout policy 

### **Compliance, Data & SFTP**

* Ability to export patient charts from EHR per Compliance Data Requirements Spec (Referral packet, Medication Profile, CTI, Recert notes, Face to Face, NOE/NOA, POC, IDG meeting notes, Visit notes, Assessments, Orders, HOPE/OASIS, Incident Reports, Coordination Notes) 
* Ability to send exported patient charts to Eleos hosted SFTP, or pull data via API/database query 
* Ability to schedule reports 
* Review example report process 
* Presence of duplicated database / Snowflake / etc. 
* Clinical reports for patient visits 
* Compliance review check 

### **Clinical Insights & Orders/Meds**

* IDG note 
* Medications 
* Review adding medication and DME `;

module.exports = { CAH_DEAL_CHANNEL_TEMPLATE };

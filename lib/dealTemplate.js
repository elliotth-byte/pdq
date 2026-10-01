// Content duplicated from the "PDQ Template" canvas:
// https://eleoshealth.slack.com/docs/TR189AKMX/F0C1V2HMD4P
//
// If the source template changes, re-copy it here (or point this at a live
// lookup if you'd rather always pull the latest version at creation time).

const DEAL_CHANNEL_TEMPLATE = `# PDQ Template

# 📋 SE Overview – PDQ Tracker

## 👥 The Team

* **SDR:**
* **AE:**
* **SE:**

## 🤓 Technical Champion:

* **Name & Title:**

## 🏎️ Tech Win Criteria:

## ⚠️ Current Blocker:

## 🧑‍🤝‍🧑 Customer Personas

* **Clinical Leads:**
* **IT / Admin:**

## 📄 Outstanding PDQ Items

### **EHR & Tech Stack**

* [ ] **EHR Vendor or Product Name** (Required for SOW)
    * [ ] 
* [ ] Web-based or Desktop
    * [ ] 
* [ ] **Review number of note templates, names, and layout details** (Required for SOW)
    * [ ] 
* [ ] **Services and programs included** (Required for SOW)
    * [ ] 

### **IT & Security Setup**

* [ ]  **Single Sign-On SSO IDP provider** (Required for SOW)
    * [ ] 
* [ ] Browsers used
    * [ ] 
* [ ]  What types of devices are available to clinicians at time of service
    * [ ] 
* [ ]  **How staff access EHR including Remote Desktops or VPNs (**discuss workflow impacts of Remote Desktop if in scope)
    * [ ] 
* [ ] Remote Desktop timeout policy
    * [ ] 
* [ ]  Enterprise extension policy deployment
    * [ ] 

### **Telehealth & Workflows**

* [ ] **Telehealth Platform** (Required for SOW)
    * [ ] 
* [ ] **Are you providing services in the field** (Required for SOW)
    * [ ] 
* [ ]  Environment for telehealth and headset usage
    * [ ] 
* [ ] Longest group session duration
    * [ ] 
* [ ] Participant count in largest group sessions
    * [ ] 

**CIA**

* [ ] **CIA:** **Ability to query notes and treatment plans from database** (Required for SOW)
    * [ ] 
* [ ] **CIA: For the cross-therapist visibility feature you need to share all notes at the client/patient level, regardless of whether they are an Eleos user. This data needs to be sent via SFTP. Additionally, consent for switching on this feature needs to be noted in the contract.**
    * [ ] 
* [ ] **CIA:** If the EHR is non-context aware, accounts must be able to query client data and association to providers (with client IDs and provider emails + names).
    * [ ] 

### **Compliance, Data & SFTP**

* [ ]  **Compliance:** **Ability to query notes and treatment plans from database** (Required for SOW)
    * [ ] 
* [ ] **Compliance: Resources to transfer queried data via SFTP using SSH authentication** (Required for SOW)
    * [ ] 
* [ ] **Compliance/CIA: Ability to setup daily transfer** (Required for SOW)
    * [ ] 
* [ ] **Compliance:** Document types in scope
    * [ ] 
* [ ] **Compliance:** Context-aware EHR confirmation
    * [ ] 

### **RCM**

* [ ] **RCM (Eligibility): Resources to transfer queried data via SFTP using SSH authentication** (Required for SOW)
    * [ ] 
* [ ] **RCM (Coding): Psychiatry is in scope >10 providers** (Required for Coding)
    * [ ] 
* [ ] **RCM (Eligibility): Are you able to query your database to retrieve the fields marked as "Required" in the Data Requirements table? (Required for Eligibility)**
* [ ] Coding: Clinical champion in Psychiatry specialty 
    * [ ] 
* [ ] Coding: Ability to pull own coding data
    * [ ] 
* [ ] Coding: Billing Model (MDM, Time based, mix of both)
    * [ ] 
* [ ] Coding: Billing for Psychotherapy add-on?
    * [ ] 
* [ ] Coding: Billing for interactive complexity?
    * [ ] 
* [ ] Coding: Payment model?
    * [ ] 
* [ ] Eligibility: Current solution for eligibility checks and gaps with this solution?
    * [ ] `;

module.exports = { DEAL_CHANNEL_TEMPLATE };

// Content duplicated from the "PDQ Template" canvas:
// https://eleoshealth.slack.com/docs/TR189AKMX/F0C6S0RE1AS
// (October 2026 revision)
//
// If the source template changes, re-copy it here (or point this at a live
// lookup if you'd rather always pull the latest version at creation time).

const DEAL_CHANNEL_TEMPLATE = `# PDQ Template October 2026

PDQ Template

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

### **EHR, Browser, and SSO**

* [ ] EHR Web-based or Desktop (Stage 3)
    * [ ] 
* [ ] Browsers Used (Stage 3)
    * [ ] 
* [ ] **Single Sign-On SSO IDP provider** **(Required for SOW) (Stage 3)**

**Documentation**

* [ ] **Services/Programs in scope and associated note templates (Required for SOW) (Stage 3)**
    * [ ] 
* [ ] How long is the longest group session? (Stage 3)
    * [ ] 
* [ ] How many participants are in your largest sessions? (Stage 3)
    * [ ] 
* [ ] **Are you providing field based services? (Required for SOW) (Stage 3)**
    * [ ] 

### **IT & Security Setup**

* [ ]  What types of devices are available to clinicians at time of service (telehealth, in person, in the field?) (Stage 3)
    * [ ] 
* [ ]  **Telehealth platform? Required for SOW) (Stage 3)**
    * [ ] 
* [ ] What is the environment in which do provide telehealth -- shared space or private? Do your providers use headsets when conducting telehealth sessions? (Stage 3)
    * [ ] 
* [ ]  Does your staff use a remote desktop? (Stage 3)
    * [ ] 
* [ ] What is your remote desktop timeout policy? (Stage 3)
    * [ ] 

**CIA**

* [ ] **CIA:** **Ability to query data and to get that querier data to us via SFTP** u**sing SSH authentication? (Required for SOW) (Stage 3)**
* [ ] **CIA: Are you able to set up a daily automation for that transfer (no human in the loop)? (Required for SOW) (Stage 3)**
    * [ ] 
* [ ] **CIA: For the cross-therapist visibility feature you need to share all notes at the client/patient level, regardless of whether they are an Eleos user. This data needs to be sent via SFTP. Additionally, consent for switching on this feature needs to be noted in the contract. (Required for SOW) (Stage 6)**
    * [ ] 

### **Compliance**

* [ ]  **Compliance: Are you able to query notes and treatment plans from your database with the required fields mentioned in this link uner the Data Specification & Troubleshooting guide: [https://app.letter.ai/share/eleos-health/pre-implementation-guide](https://app.letter.ai/share/eleos-health/pre-implementation-guide) (Required for SOW) (Stage 3)**
    * [ ] 
* [ ] **Compliance: Are you able to build custom reports in your EHR? Reports that show progress notes and treatment plans. (Required for SOW) (Stage 3)**
    * [ ] 
* [ ] **Compliance: Can you export those reports in any way? CSV, XLSX, etc. (Required for SOW) (Stage 3)**
    * [ ] 
* [ ] **Compliance: Is there any way to automate that export? (Required for SOW) (Stage 3)**
    * [ ] 

### **RCM**

* [ ] **RCM (Eligibility): Are you able to query your database to retrieve the fields marked as "Required" in the Data Requirements table? (Required for SOW) (Stage 3)**
* [ ] **RCM (Eligibility): Resources to transfer queried data via SFTP using SSH authentication** (**Required for SOW) (Stage 3)**
    * [ ] 
* [ ] **RCM (Eligibility): Are you able to set up a weekly or monthly automation for that transfer (no human in the loop) (Required for SOW) (Stage 3)**
    * [ ] 
* [ ] Coding: Ability to pull own coding data (Stage 3)
    * [ ] 
* [ ] Coding: Billing Model (MDM, Time based, mix of both) (Stage 3)
    * [ ] 
* [ ] Coding: Billing for Psychotherapy add-on? (Stage 3)
    * [ ] 
* [ ] Coding: Billing for interactive complexity? (Stage 3)
    * [ ] 
* [ ] Coding: Payment model? (Stage 3)
    * [ ] 
* [ ] RCM (Coding): Psychiatry is in scope >10 providers (Stage 2)
    * [ ] `;

module.exports = { DEAL_CHANNEL_TEMPLATE };

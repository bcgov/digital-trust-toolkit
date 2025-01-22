# Law Society of British Columbia - Lawyer – Credential Documentation

## 1. About this Document

This document describes the Law Society of British Columbia's (LSBC) use of the Lawyer credential to help potential verifiers determine whether it is suitable for their needs. The intended audience includes policy analysts, privacy specialists, solution architects, developers, and data architects.

### 1.1 Version History

| Ver. | Date | Notes |
|------|------|-------|
| 1.1  | January 9, 2025    | Updates with production DID, Schema and Cred Def values       |
| 1.0  | December 10, 2024     | Initial version       |


## 2. Credential Overview
This credential represents proof that a Lawyer in British Columbia is in good standing with the Law Society of British Columbia. This credential, effective January 15th, 2025, is available for Practicing Lawyers to hold in the BC Wallet App as "Lawyer Credential".
Note: This credential supersedes the Member Card credential previously issued to lawyers from LSBC.
|              |                                                                |
|-------------------------|---------------------------------------------------------------------------------|
| **Credential:**         | Lawyer Credential                                          |
| **Schema:**             | Legal Professional                                          |
| **Issuer:**             | Law Society of British Columbia (LSBC) <br/> [https://www.lawsociety.bc.ca/](https://www.lawsociety.bc.ca/) |     

## 3. Governance & Legal

### 3.1 Governing Authority & Administrative Authority
The Law Society of British Columbia, as defined in the [Legal Profession Act](https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/98009_01), is the governing authority and administrative authority for the Lawyer credential.
[https://glossary.trustoverip.org/#term:governing-body]
[https://glossary.trustoverip.org/#term:administering-body]

### 3.2 Legal

#### 3.2.1 For Verifiers
Not applicable

#### 3.2.2 For End Users
The Terms of Use for this credential as it relates to End Users is documented here: [Lawyer Credential TOU - 4679934](./4679934%20-%202025-Lawyer-Credential%20TOU.pdf)

## 4. Credential Data, Issuance, and Changes

### 4.1 Data Source(s)
Law Society maintains a database of registered lawyers

### 4.2 Data Updates
LSBC administrators perform updates on database records which trigger credential revocations and re-issuance, see further details in section 4.4

### 4.3 Issuance
The lawyer MUST log in to the Law Society Member Portal with their username and password. The Member Portal provides a means for connecting with the BC Wallet with a QR code scan process. Once the connection is established, the Lawyer credential is issued to the BC Wallet based on the account information associated with the logged-in user. The LSBC Member Portal WILL use the Traction tenant integration to perform the App Attestation proof request check to ensure this connection is with the official BC Wallet App. If the check fails, the connection is deleted and an error is returned to the LSBC Member Portal.

### 4.4 Revocation
- The credential will be revoked in the following cases:
  - If the status changes from PRAC/Practicing to any other status
- The credential will be revoked and re-issued in the following cases:
  - If the Given Name and/or Surname of the lawyer changes, through the LSBC name change process

## 5. Credential Definition

### 5.1 Subject
The subject of this credential is the individual to whom it was issued, where that individual is a lawyer registered with the Law Society of B.C.

### 5.2 Attributes

| **Display Name**         | **Attribute**            | **Description**                                                                                                       | **Format**               | **Rules & Notes**        | **Examples**             |
|--------------------------|--------------------------|-----------------------------------------------------------------------------------------------------------------------|--------------------------|--------------------------|--------------------------|
| **Given Name**           | `Given Name`             | The legal given name on file with the Law Society of the legal professional.                                          | text                     | N/A                      | John Robert              |
| **Surname**              | `Surname`                | The legal surname on file with the Law Society of the legal professional.                                             | text                     | N/A                      | Smith                    |
| **Public Person ID**     | `PPID`                   | The Public Person ID is the unique identifier for the legal professional registered with the Law Society. This is NOT the number on the Certificate issued to the legal professional. | alphanumeric             | The prefix will always be MC | MC238946                 |
| **Member Status**        | `Member Status`          | The current status for the legal professional according to the Law Society policies.                                  | text                     | Only the PRAC;Practicing status is used for valid issued credentials. Other statuses are revoked. | PRAC                     |
| **Member Status Code**   | `Member Status Code`     | The code indicating the current status for the legal professional according to the Law Society policies.               | text                     | Only the PRAC;Practicing status is used for valid issued credentials. Other statuses are revoked. | Practicing               |
| **Credential Type**      | `Credential Type`        | The Credential Type indicates the type of legal professional credential issued. (Lawyer)                               | text                     | N/A                      | Lawyer                   |

## 6 Implementations
### 6.1 Technical Format
This credential uses the [Hyperledger AnonCreds](https://github.com/hyperledger/anoncreds/) specification and the "Legal Professional" schema which has the following defined attributes.

### 6.2 Issuer List
The Governing Authority of this Credential document attests that the following issuer information is accurate and can be relied upon by verifiers.
| Environment | Issuer Name | Issuer DID |
|------|------|-------|
| CANdy Production  | Law Society of British Columbia     | QzLYGuAebsy3MXQ6b1sFiT   |
| CANdy Test  | Law Society of British Columbia     | MLvtJW6pFuYu4NnMB14d29   |

### 5.3 Schema Implementation
|Environment|Ledger|Schema ID|
|---|---|---|
|CANdy Production|[legal-professional](https://candyscan.idlab.org/tx/CANDY_PROD/domain/2351)|QzLYGuAebsy3MXQ6b1sFiT:2:legal-professional:1.0|
|CANdy Test|[legal-professional](https://candyscan.idlab.org/tx/CANDY_TEST/domain/248)|MLvtJW6pFuYu4NnMB14d29:2:legal-professional:1.0|

### 5.4 Credential Implementation
|Environment|Ledger|Credential Definition ID|OCA Bundle|
|---|---|---|---|
|CANdy Production|[lawyer](https://candyscan.idlab.org/tx/CANDY_PROD/domain/2352)|QzLYGuAebsy3MXQ6b1sFiT:3:CL:2351:lawyer|[Lawyer PROD OCA](https://github.com/bcgov/aries-oca-bundles/tree/main/OCABundles/schema/bcgov-digital-trust/LSBC/Lawyer/Prod)|
|CANdy Test|[lawyer](https://candyscan.idlab.org/tx/CANDY_TEST/domain/249)|MLvtJW6pFuYu4NnMB14d29:3:CL:248:lawyer|[Lawyer TEST OCA](https://github.com/bcgov/aries-oca-bundles/tree/main/OCABundles/schema/bcgov-digital-trust/LSBC/Lawyer/Test)|

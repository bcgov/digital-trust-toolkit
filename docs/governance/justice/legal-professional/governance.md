# Legal Professional – Credential Documentation

## 1. About this Document

This document describes the Legal Professional credential to help potential verifiers determine whether it is suitable for their needs. The intended audience includes policy analysts, privacy specialists, solution architects, developers, and data architects.

### 1.1 Version History

| Ver. | Date | Notes |
|------|------|-------|
| 1.0  | December 10, 2024     | Intial version       |

## 2. Overview
This credential represents proof that a Legal Professional in British Columbia is in good standing with the Law Society of British Columbia. This credential is currently available for Practicing Lawyers to hold in the BC Wallet App as "Lawyer Credential".
Note: This credential supersedes the Member Card credential previously issued to lawyers from LSBC.

### 2.1 Issuer Details
|              |                                                                |
|-------------------------|---------------------------------------------------------------------------------|
| **Issuer:**             | Law Society of British Columbia (LSBC)                                          |
| **Issuer Website:**     | [https://www.lawsociety.bc.ca/](https://www.lawsociety.bc.ca/)                                          |
| **Data Source:**        | LSBC Registry of Members             |

## 3. Governance & Legal

### 3.1 Governing Authority & Administrative Authority
The Law Society of British Columbia, as defined in the [Legal Profession Act](https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/98009_01), is the governing authority and administrative authority for the Legal Professional credential.
[https://glossary.trustoverip.org/#term:governing-body]
[https://glossary.trustoverip.org/#term:administering-body]

### 3.2 Legal

#### 3.2.1 For Verifiers
_A statement – included or linked to – limiting the liability of the issuer (and, if different, the governing and administrative authorities) for any harms suffered by parties that accept the credential._

#### 3.2.2 For End Users
_A statement – included or linked to – limiting the liability of the issuer (and, if different, the governing and administrative authorities) for any harms suffered by parties that are issued the credential. This will often be presented to end users during the issuance process._

## 4. Credential Data, Issuance, and Changes

### 4.1 Data Source(s)
- Law Society Member Portal connected to the database of registered legal professionals

### 4.2 Data Updates
_How and when the Issuer gets updates to the data that goes into the credential. How the credential gets updated should be left for the Revocation section, below._

### 4.3 Issuance
The legal professional MUST login to the Law Society Member Portal with their username and password. The Member Portal provides a means for connecting with the BC Wallet with a QR code scan process. Once the connection is established, the Legal Professional credential is issued to the BC Wallet based on the account information associated to the logged in user. The LSBC Member Portal WILL use the Traction tenant integration to perform the App Attestation proof request check to ensure this connection is with the official BC Wallet App. If the check fails, the connection is deleted and an error is returned to the LSBC Member Portal.

### 4.4 Revocation
- The credential will be revoked in the following cases:
  - If the status changes from PRAC/Practicing to any other status
- The credential will be revoked and re-issued in the following cases:
  - If the Given Name and/or Surname of the legal professional changes, through the LSBC name change process

## 5. Credential Definition

### 5.1 Subject
The subject of this credential is the individual to whom it was issued, where that individual is a legal professional registered with the Law Society of B.C.

### 5.2 Attributes
This credential uses the [Hyperledger AnonCreds](https://github.com/hyperledger/anoncreds/) specification and has the following defined attributes. Further details on the attributes are listed in section 5 of this document. 

| **Display Name**         | **Attribute**            | **Description**                                                                                                       | **Format**               | **Rules & Notes**        | **Examples**             |
|--------------------------|--------------------------|-----------------------------------------------------------------------------------------------------------------------|--------------------------|--------------------------|--------------------------|
| **Given Name**           | `Given Name`             | The legal given name on file with the Law Society of the legal professional.                                          | text                     | N/A                      | John Robert              |
| **Surname**              | `Surname`                | The legal surname on file with the Law Society of the legal professional.                                             | text                     | N/A                      | Smith                    |
| **Public Person ID**     | `PPID`                   | The Public Person ID is the unique identifier for the legal professional registered with the Law Society. This is NOT the number on the Certificate issued to the legal professional. | alphanumeric             | The prefix will always be MC | MC238946                 |
| **Member Status**        | `Member Status`          | The current status for the legal professional according to the Law Society policies.                                  | text                     | Only the PRAC;Practicing status is used for valid issued credentials. Other statuses are revoked. | PRAC                     |
| **Member Status Code**   | `Member Status Code`     | The code indicating the current status for the legal professional according to the Law Society policies.               | text                     | Only the PRAC;Practicing status is used for valid issued credentials. Other statuses are revoked. | Practicing               |
| **Credential Type**      | `Credential Type`        | The Credential Type indicates the type of legal professional credential issued. (Lawyer)                               | text                     | N/A                      | Lawyer                   |


### 5.3 Schema Implementation
|Environment|Ledger|Schema ID|
|---|---|---|
|CANdy Production|TODO|TODO|
|CANdy Test|[legal-professional](https://candyscan.idlab.org/tx/CANDY_TEST/domain/248)|MLvtJW6pFuYu4NnMB14d29:2:legal-professional:1.0|

### 5.4 Credential Implementation
|Environment|Ledger|Credential Definition ID|OCA Bundle|
|---|---|---|---|
|CANdy Production|TODO|TODO|TODO|
|CANdy Test|[lawyer](https://candyscan.idlab.org/tx/CANDY_TEST/domain/249)|MLvtJW6pFuYu4NnMB14d29:3:CL:248:lawyer|[Lawyer Credential](https://github.com/bcgov/aries-oca-bundles/tree/main/OCABundles/schema/bcgov-digital-trust/lawyer-credential)|


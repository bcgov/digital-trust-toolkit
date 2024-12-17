# Legal Professional – Credential Documentation

## 1. About this Document

This document describes the Legal Professional credential to help potential verifiers determine whether it is suitable for their needs. The intended audience includes policy analysts, privacy specialists, solution architects, developers, and data architects.

### 1.1 Version History

| Ver. | Date | Notes |
|------|------|-------|
| 1.0  | December 10, 2024     | Intial version       |

## 2. Credential Overview
This credential represents proof that a Legal Professional in British Columbia is in good standing with the Law Society of British Columbia. This credential is currently available for Practicing Lawyers to hold in the BC Wallet App as "Lawyer Credential".
Note: This credential supersedes the Member Card credential previously issued to lawyers from LSBC.

### 2.1 Credential Details

|              |                                                                |
|-------------------------|---------------------------------------------------------------------------------|
| **Issuer:**             | Law Society of British Columbia (LSBC)                                          |
| **Issuer Website:**     | [https://www.lawsociety.bc.ca/](https://www.lawsociety.bc.ca/)                                          |
| **Holders:**            | Members of LSBC                    |
| **Data Source:**        | LSBC Registry of Members             |
| **Issuer DID:**         | _DID of the Issuer_                                                            |
| **Format:**             | Hyperledger AnonCreds                                       |
| **Data Registry:**      | CANdy                                                              |
| **Schema:**             | legal-professional, v1.0, _txid of the schema (SCHEMA_TX)_ |
| **Credential Definition(s):** | lawyer, _txid of the credential definition (CLAIM_DEF)_                  |
| **OCA Bundle(s):**           | [Lawyer Credential](https://github.com/bcgov/aries-oca-bundles/tree/main/OCABundles/schema/bcgov-digital-trust/lawyer-credential)  |


### 2.2 Attribute Summary

| Display Name of Attribute | Attribute       | Data Type |
|---------------------------|-----------------|-----------|
| Given Name                | `Given Name`    | string    |
| Surname                   | `Surname`       | string    |
| PPID          | `PPID`          | string  |
| Member Status             | `Member Status` | string    |
| Member Status Code        | `Member Status Code`  | string    |
| Credential Type           | `Credential Type` | string    |

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

| **Field**               | **Description**                                                                                                       |
|--------------------------|-----------------------------------------------------------------------------------------------------------------------|               
| **Display Name**         | Given Name; Surname |
| **Description**          | The legal name on file with the Law Society of the legal professional. |
| **Attribute**            | Given Name; Surname |
| **Data Type**            | string; string |
| **Format**               | text |
| **Rules**                | N/A |
| **Examples**             | John Robert; Smith |
| **Notes**                | None |

| **Field**               | **Description**                                                                                                       |
|--------------------------|-----------------------------------------------------------------------------------------------------------------------|               
| **Display Name**         | Public Person ID |
| **Description**          | The Public Person ID is the unique identifier for the legal professional registered with the Law Society. This is NOT the number on the Certificate issued to the legal professional. |
| **Attribute**            | PPID |
| **Data Type**            | string |
| **Format**               | alphanumeric |
| **Rules**                | The prefix will always be MC |
| **Examples**             | MC238946 |
| **Notes**                | None |

| **Field**               | **Description**                                                                                                       |
|--------------------------|-----------------------------------------------------------------------------------------------------------------------|               
| **Display Name**         | Member Status; Member Status Code |
| **Description**          | The Member Status and Member Status Code indicate the current status for the legal professional according to the Law Society policies.<br/>  Member Status Code; Member Status (PRAC;Practicing, NPRAC;Non-Practicing, RETI;Retired, FORM;Former) |
| **Attribute**            | Member Status; Member Status Code |
| **Data Type**            | string |
| **Format**               | text |
| **Rules**                | N/A |
| **Examples**             | PRAC;Practicing |
| **Notes**                | Only the PRAC;Practicing status is used for valid issued credentials. Other statuses are revoked. |

| **Field**               | **Description**                                                                                                       |
|--------------------------|-----------------------------------------------------------------------------------------------------------------------|               
| **Display Name**         | Credential Type |
| **Description**          | The Credential Type indicates the type of legal professional credential issued. (Lawyer)|
| **Attribute**            | Credential Type |
| **Data Type**            | string |
| **Format**               | text |
| **Rules**                | N/A |
| **Examples**             | Lawyer |
| **Notes**                | None |

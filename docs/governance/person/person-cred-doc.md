# Person – Credential Documentation

## About this Document

This document describes the Government of British Columbia’s Person credential to help potential verifiers determine whether it is suitable for their needs. The intended audience includes policy analysts, privacy specialists, solution architects, developers, and data architects.

### Version History

| Ver.       | Date        | Notes                                               |
| ---------- | ----------- | --------------------------------------------------- |
| <b>1.0</b> | 25-Oct-2023 | -                                                   |
| <b>1.1</b> | 28-Mar-2023 | Corrected Schema ID, updated description of Holders |

## Credential Overview

The Person credential is a verifiable credential (VC) issued to individuals to enable them to prove their identity and to digitally provide key personal information – name, data of birth, photo, address – to other parties (“verifiers”). The Person credential is intended to be used as a source of trusted identity information in a wide range of contexts, either alone or in conjunction with other credentials. The Person credential currently is only issued to the BC Wallet, a mobile application published by the Digital Identity & Trust Program (DITP) within the Office of the Chief Information Officer (OCIO) of the BC
Ministry of Citizens’ Services.

<table>
  <tr>
    <th>Credential</th>
    <td>Person</td>
  </tr>
  <tr>
    <th>Issuer</th>
    <td>
        Service BC, through its Provincial Identity Information Management (IDIM) Program, of the BC Government of British Columbia
    </td>
  </tr>
  <tr>
    <th>Issuer DID</th>
    <td>RGjWbW1eycP7FrMf4QJvX8</td>
  </tr>
  <tr>
    <th>Schema</th>
        <td>
            Person, version 1.0
            <ul><li>Schema ID: RGjWbW1eycP7FrMf4QJvX8:2:Person:1.0</li><li>Documentation: <sup>1</sup></li></ul>
        </td>
  </tr>
  <tr>
    <th>Credential</th>
        <td>Person, version 1.0<ul><li>Cred Def ID: RGjWbW1eycP7FrMf4QJvX8:3:CL:13:Person</li></ul></td>
  </tr>
  <tr>
    <th>Data Registry</th>
    <td> 
        CANdy Ledger
        <ul>
            <li>Ledger <a href="https://candyscan.idlab.org/home/CANDY_PROD">browser</a></li>
            <li>Ledger <a href="https://github.com/ICCS-ISAC/dtrust-reconu/blob/main/CANdy/prod/pool_transactions_genesis">Pool Genesis File</a></li>
        </ul>    
    </td>
  </tr>
  <tr>
    <th>Holders</th>
    <td>The Person credential is currently only issued to individuals who have had their identity verified by the BC Services Card Program, have a valid BC Services Card, have authenticated with the BC Services Card app, and are at least 19 years of age.</td>
</tr>
<tr>
    <th>Data Source</th>
    <td>
        The Person credential data comes from the BC Services Card digital identity. More specifically:
        <ul>
            <li>The individual’s name is from their Canadian foundational identity document (e.g., birth certificate, immigration document) unless taken from marriage or name change documents</li>
            <li>The individual’s date of birth is from the subject’s Canadian foundational identity document</li>
            <li>Address values are self-asserted and unverified</li>
            <li>Picture is taken by the BC Services Card program partner, the Insurance Corporation of BC (ICBC), at the time the individual presents their foundational identity documents</li>
        </ul>
    </td>
</tr>
<tr>
    <th>Revocation</th>
    <td>A Person credential will be revoked – and will often be re-issued – due to both automated events (e.g., data updates) and manual events. These are described in greater detail in the Revocation section, below.</td>
</tr>
<tr>
    <th>Assurance</th>
    <td>The Person credential is issued to individuals who have been identified at a High (3) Identification Level as defined by the BC Office of the CIO <a href="https://www2.gov.bc.ca/assets/gov/government/services-for-government-and-broader-public-sector/information-technology-services/standards-files/identity_assurance_standard.pdf">Identity Assurance Standard</a>.</td>
</tr>
</table>

<sup>1</sup>The Person Schema documentation will be published and maintained by the CANdy Network through a forthcoming agreement between the provinces of BC, Ontario, and Quebec.

### Attribute Summary

Attributes are fully described in the Attributes section, below.

| **Name**       | **Attribute**                    | **Data Type**                      |
| -------------- | -------------------------------- | ---------------------------------- |
| Given Names    | <code>given_names</code>         | String                             |
| Family Name    | <code>family_name</code>         | String                             |
| Date of Birth  | <code>birthdate_dateint</code>   | Integer                            |
| Street Address | <code>street_address</code>      | String                             |
| Locality       | <code>locality</code>            | String                             |
| Region         | <code>region</code>              | String                             |
| Postal Code    | <code>postal_code</code>         | String                             |
| Country        | <code>country</code>             | String                             |
| Picture        | <code>picture</code>             | String, base64 encoded binary file |
| Expiry Date    | <code>expiry_date_dateint</code> | Integer                            |

## Credential Details

### Issuer

The Person credential is issued by Service BC, the division within the BC Ministry of Citizens’ Services that houses the BC Provincial Identity Information Management (IDIM) Program. IDIM is the digital identity issuer for the BC Services Card Program.

### Issuer Data Source

The Person credential data comes from the digital identity record of the BC Services Card Program, which collects and verifies the personal information of people enrolled in the provincial Medical Services Plan (MSP). A consequence of this is that only people enrolled in MSP can be issued a Person credential. The following people may not enroll in MSP: new arrivals to the province, people who live more than half the year outside the province, military members, and some federal employees. <br></br>
The BC Services Card Program collects name and date of birth from the subject’s Canadian foundational identity documents as well as, if the individual has changed their name, name linking documents (e.g., marriage certificate). Adults are required to present a government-issued photo ID (e.g., driver’s license, passport) during the identity-proofing process and to have their photo taken as part of the identity- proofing event. Address information is provided by the subject but is not verified; ICBC mails each BC Services Card to the address provided by the individual unless the individual arranges to pick it up in person.

#### Data Updates

When a Person credential is issued, its data reflects that of the individual's BC Services Card digital identity record. Changes to this digital identity record will trigger a revocation (and often re-issuance) of the Person credential to ensure the credential reflects the updated identity record; these cases are described in further detail in the section on Revocation, below. <br></br>

The BC Services Card digital identity record may be updated by the individual in two ways:

- An individual wishing to change their name, correct their data of birth, or update their photo must do so in-person and must present documents supporting their identity and the requested change
- Change of address may be done online, with authentication based on shared secrets about the individual

The digital identity record may also be updated by the BC Services Card program, such as when a card expires or when the individual has been reported deceased by the BC Vital Statistics Agency.

### Assurance

The Person credential is based on the BC Services Card digital identity, which is considered a high assurance digital identity credential by both the Government of British Columbia and the Government of Canada.

#### BC Services Card

By design, the BC Services Card digital identity meets the BC Office of the CIO [Identity Assurance Standard](https://www2.gov.bc.ca/assets/gov/government/services-for-government-and-broader-public-sector/information-technology-services/standards-files/identity_assurance_standard.pdf) requirements for a High (3) Identity Assurance Level. It meets this through the combination of its identity proofing process, the security of the issued credential, and the security of its two-factor authentication. <br></br>
The BC Services Card digital identity has been assessed twice, in 2019 and 2021, by the Treasury Board of Canada Secretariat (TBS) against the Public Sector Profile of the Pan-Canadian Trust Framework (PSP- PCTF). In both cases, it was assessed as being a Trusted Digital Identity Level 3 (high), as defined in Appendix A of the TBS [Directive on Identity Management](https://www.tbs-sct.canada.ca/pol/doc-eng.aspx?id=16577).

#### Person Credential

The Person credential is based on the BC Services Card digital identity and is securely issued using BC Services Card two-factor authentication into the BC Wallet app. Of note:

- The Person credential is issued to individuals who have been identified at a High (3) Identification Level as defined by the BC Office of the CIO [Identity Assurance Standard](https://www2.gov.bc.ca/assets/gov/government/services-for-government-and-broader-public-sector/information-technology-services/standards-files/identity_assurance_standard.pdf). It is based on the identity record of the BC Services Card and requires the individual to prove who they are using a BC Services Card authenticator, ensuring a Person credential is issued to the correct individual’s wallet
- The Person credential will only be issued to the BC Wallet, which requires authentication to use, protecting use of the Person credential by anyone other than the legitimate holder

### Revocation

A Person credential will be revoked in the following cases:

1. When an individual is issued a new Person credential (with the same or updated identity information), any previous Person credentials issued to that individual will be revoked as part of the issuance process. An individual may only have one active Person credential at a time.
1. When an individual revokes their own credential, which they may do after logging into their [BC Services Card Account](https://id.gov.bc.ca/account/).
1. When authorized IDIM staff revoke the credential, either in response to a support call from the individual (e.g., after losing a mobile device) or for other reasons (e.g., security concerns).
1. The individual’s physical card is suspended or deactivated (e.g., due to fraud) and/or the identity record is retired in the BC Services Card system e.g., due to death
1. The individual’s identity record changes from having been updated with a BC Services Card to
   one set up with other Canadian identity documents

A Person credential will be revoked and re-issued in the following cases:

1. The individual’s identity information (e.g., name, birthdate, address, photo) changes
1. The individual’s card type changes between one that has a photo to one that doesn’t, or from a card type that does not have a photo to one that does

A credential is re-issued by sending an offer, which the individual may choose to accept, to the individual’s wallet. This offer can only be made if the individual’s BC Wallet still has the same Contact<sup>2</sup> through which they were originally issued the credential.

<sup>2</sup>A “Contact” in the BC Wallet is, technically, a [Hyperledger Aries Connection](https://github.com/hyperledger/aries-rfcs/blob/main/features/0160-connection-protocol/README.md).

## Credential Definition

### Credential Schema

Person credential is based on the Person Schema<sup>3</sup> published by the provinces of British Columbia, Ontario, and Quebec through the CANdy Network. See Credential Overview, above, for details. <br></br>
This section describes how the Person credential implements the Person Credential Type. Unless noted otherwise below, the subject and attributes of the Person credential have been implemented as defined and specified in the Person Schema.

<sup>3</sup> The Schema is a “template that defines a set of attributes” which is referenced by one or more Credential Definitions of one or more credential issuers; the credential definition is an issuer’s implementation of a schema (https://hyperledger.github.io/anoncreds-spec/#terminology). The Person schema is intended to be referenced in the credential definitions by multiple issuers in Canada (e.g., BC, Ontario).

### Subject of the Credential

The subject of a Person credential is the individual to whom it was issued, i.e., its holder. See the Credential Assurance section, above, for why a verifier can be confident that the holder of a Person credential is the subject of the credential.

### Attributes

This section indicates which Person Schema attributes are used by BC, whether there are any BC-specific implementation notes, and some exceptions in the attribute data.

<table>
  <tr>
    <th>Notes</th>
    <td>
        <ul><li>Attribute data will always be upper case (e.g., "SMITH" not "Smith")</li><li>The only characters allowed are the letters A through Z, digits 0 through 9, and the following "special characters": hyphen, apostrophe, period, and space</li><li>Characters are encoded using UTF-8</li></ul>
    </td>
  </tr>
</table>

#### Name Attributes

The name attributes of a Person credential will – with some exceptions – reflect the name on the subject’s Canadian foundational identity documents.

<table>
  <tr>
    <th>Notes</th>
    <td>
        <ul>
            <li>If an individual's name has a special character (e.g., Á, Ê, Ç) or a number in their name on their foundational identity document, it will not be reflected in the name attributes of the Person credential</li>
            <li>The name in the Person credential will normally reflect the name on foundational identity documents or name linking documents (e.g. marriage certificates), but those documents may not reflect the individual’s name. For example</li>
            <ul>
                <li>Some names have special characters that the BC Vital Statistics can print on a birth certificate but does not pass on to the BC Services Card Program computer system</li>
                <li>Immigration, Refugees and Citizenship Canada (IRCC) will truncate an individual’s name (the combined given names and family name) at 45 characters on IIRC foundational identity documents (e.g., permanent resident card and the student, work, visitor, and temporary-resident permits)</li>
            </ul>
            <li>An individual may use the last name of their spouse without getting a legal name change. In these cases, their Person credential <i>should</i> reflect – via their BC Services Card record – their foundational identity documents, as individuals are required by law to update their BC Services Card when they change their name by marriage or otherwise. Individuals who do this may continue to use their original name in other contexts, and so their Person credential may not be consistent with their other identity documents or credentials bearing their name</li>
        </ul>
    </td>
  </tr>
</table>

##### Given Names

<table>
  <tr>
    <th>Attribute</th>
    <td><code>given_names</code></td>
  </tr>
  <tr>
    <th>Format</th>
    <td>
      <ul>
        <li>Maximum 47 characters</li>
        <li>Consists of three names, a first name and up to two middle names, delimited by spaces</li>
        <ul><li>Each name may be up to 15 characters long</li></ul>
      </ul>
    </td>
  </tr>
  <tr>
    <th>Rules</th>
    <td>
      <ul>
        <li>May be blank</li>
        <li>First and middle names over 15 characters are truncated</li>
        <li>If the individual has a mononym, this attribute will normally have no value and the mononym will appear in the family_name attribute</li>
      </ul>
    </td>
  </tr>
  <tr>
    <th>Notes</th>
    <td>
      <ul>
        <li>Names can start with special characters</li>
        <li>First Names and Middle Names with spaces or punctuation (e.g., “JO ANNE”, “JIAN U”, “D’ARCY”) will have the spaces and punctuation removed (e.g., “JOANNE”, “JIANU”, “DARCY”)</li>
        <li>To work around the removal of spaces, described above, a first name with a space (e.g. “JO ANNE”) may be entered as a first name and a middle name (e.g., “JO ANNE” is entered as “JO” and “ANNE”). This will appear as “JO ANNE” in the given_names attribute, which is indistinguishable from an individual whose first name is “JO” and whose middle name is “ANNE”. Similarly, a middle name with a space (e.g., “MARY LOU”) may be entered as two middle names (e.g., “MARY” and “LOU”). As such, spaces in the given_names attribute are not a reliable delimiter between names</li>
        <li>Some legacy records have only an initial for a middle name (e.g., "J" for "James")</li>
        <li>A mononym may be duplicated in this attribute and the family_name unless it has a space in it, in which case the first part may be recorded in this attribute and the second part in the family_name attribute</li>
      </ul>
    </td>
  </tr>
</table>

##### Family Names

<table>
  <tr>
    <th>Attribute</th>
    <td><code>family_names</code></td>
  </tr>
  <tr>
    <th>Format</th>
    <td><ul><li>Maximum 35 characters</li></ul></td>
  </tr>
  <tr>
    <th>Rules</th>
    <td>
      <ul><li>Never blank</li><li>Family names over 35 characters are truncated</li></ul>
    </td>
  </tr>
  <tr>
    <th>Notes</th>
    <td>
      <ul><li>Last Names with spaces or punctuation (e.g., “St. John”, “O’Brian”, “van Cleef”, “Scott-Bigsby”) will have the spaces and punctuation included if the individual has a photo BC Services Card but removed if the individual has a non-photo BC Services Card</li><li>family_name unless it has a space in it, in which case the family_name attribute</li></ul>
    </td>
  </tr>
</table>

### Date of Birth Attributes

##### Date of Birth

<table>
  <tr>
    <th>Attribute</th>
    <td><code>birthdate_dateint</code></td>
  </tr>
  <tr>
    <th>Rules</th>
    <td><ul><li>Never blank</li></ul></td>
  </tr>
</table>

### Address Attributes

<table>
  <tr>
    <th>Notes</th>
    <td>
      <ul>
        <li>All address attributes in a Person credential are for a single address</li>
        <li>The address is the address provided by the individual or, for children, their guardian</li>
        <li>The address is usually in BC, but may be in another part of Canada or in another country</li>
        <li>The address in a Person credential is usually – but not always – both the residential and the mailing address of the subject</li>
        <ul>
          <li>The address in the Person credential is the address provided by the individual (or, for a child, their guardian) when they first apply for MSP, when they renew their BC Services Card (generally required every 5 years), or when the individual notifies  a BC Services Card program partner of a change to their address or updates their address through <a href="https://www.addresschange.gov.bc.ca">AddressChangeBC</a> online.</li>
          <li>Some individuals may provide another person’s address to HIBC or ICBC, e.g., young adults moving for university may continue to use their parent’s address</li>
          <li>Some individuals may provide a Post Office Box</li>
          <li>Individuals are legally required to notify HIBC and ICBC within two weeks of a change of address, but not everyone complies</li>
        </ul>
      </ul>
</td>

  </tr>
</table>

##### Street Address

<table>
  <tr>
    <th>Attribute</th>
    <td><code>street_address</code></td>
  </tr>
  <tr>
    <th>Format</th>
    <td><ul><li>Maximum 66 characters, comprised of up to two rows of up to 32 characters each, with a carriage return/line feed pair ("\r\n") delimiting the rows</li></ul></td>
  </tr>
  <tr>
    <th>Rules</th>
    <td><ul><li>May be blank</li></ul></td>
  </tr>
</table>

#### Locality

<table>
  <tr>
    <th>Attribute</th>
    <td><code>locality</code></td>
  </tr>
  <tr>
    <th>Rules</th>
    <td><ul><li>May be blank</li></ul></td>
  </tr>
</table>

#### Region

<table>
  <tr>
    <th>Attribute</th>
    <td><code>region</code></td>
  </tr>
  <tr>
    <th>Format</th>
    <td><ul><li>For Canadian addresses, this will be a two-character Province or Territory code</li><li>For U.S. addresses, this will be two-character State code</li><li>For other addresses, the format is not defined</li></ul></td>
  </tr>
  <tr>
    <th>Rules</th>
    <td><ul><li>May be blank</li></ul></td>
  </tr>
</table>

#### Postal Code

<table>
  <tr>
    <th>Attribute</th>
    <td><code>postal_code</code></td>
  </tr>
  <tr>
    <th>Format</th>
    <td><ul><li>Maximum 10 characters</li><li>Canadian postal codes will have a space, e.g., "V8V 3P6"</li></ul></td>
  </tr>
  <tr>
    <th>Rules</th>
    <td><ul><li>May be blank</li></ul></td>
  </tr>
  <tr>
    <th>Notes</th>
    <td><ul><li>This may be a US ZIP Code or a postal code of another country</li></ul></td>
  </tr>
</table>

#### Country

<table>
  <tr>
    <th>Attribute</th>
    <td><code>country</code></td>
  </tr>
  <tr>
    <th>Rules</th>
    <td><ul><li>May be blank</li></ul></td>
  </tr>
</table>

### Other Attributes

#### Picture

<table>
  <tr>
    <th>Attribute</th>
    <td><code>picture</code></td>
  </tr>
  <tr>
    <th>Format</th>
    <td><ul><li>The picture is a 230 by 300 pixel portrait, in JPG format, in base 64 encoding in a Data URL</li></ul></td>
  </tr>
  <tr>
    <th>Rules</th>
    <td><ul><li>May be blank</li><li>Starting in Fall 2023, credentials will be issued with a picture if there is one on the individual’s current BC Services Card</li></ul></td>
  </tr>
  <tr>
    <th>Notes</th>
    <td><ul><li>During the initial pilot program, the Person credential was issued without a picture. Those credentials are to eventually be revoked and replaced with ones that include a picture</li><li>The image is a passport-style picture of the individual taken during the identity proofing event</li></ul></td>
  </tr>
</table>

#### Expiry Date

<table>
  <tr>
    <th>Attribute</th>
    <td><code>expiry_date_dateint</code></td>
  </tr>
  <tr>
    <th>Rules</th>
    <td><ul><li> Always blank – BC <u><i>does not</i></u> include an expiry date in its Person credential</li></ul></td>
  </tr>
</table>

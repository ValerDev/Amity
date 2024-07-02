import React, { useRef } from 'react';
import s from './TermsPage.module.scss';
import sHome from '../Home/Home.module.scss';
import { Footer } from '../Footer/Footer';
import { Header } from "../../components/Header/Header";
export const TermsPage = () => {

    const homeRef = useRef(null);
    const guideRef = useRef(null);
    const helpRef = useRef(null);
    const weTransportRef = useRef(null);
    const whyAmityRef = useRef(null);
    const redefiningMobilityRef = useRef(null);

    return (
        <div>
			<div className={sHome.home} ref={homeRef}>
				<Header homeRef={homeRef} guideRef={guideRef} helpRef={helpRef} weTransportRef={weTransportRef} whyAmityRef={whyAmityRef} redefiningMobilityRef={redefiningMobilityRef} showHeaderLinks={false} makeLogoLink={true} />
			</div>
            <div className={s.TermsPage}>
				<h3>1. Definitions</h3>
				<ul>
					<li><b>“Additional Services”</b> means additional services or upgrades ordered by the Customer such as guaranteed pick up date, covered transport, additional items significantly increasing the weight and the volume of the cargo, assistance to load the Shipment at Point of Origin and unload at Destination etc.</li>
					<li><b>“Agreement”</b> means any written confirmation from Amity Transportation to the Customer confirming the Customer’s Order and other details including but not limited to description of Shipment, Point of Origin, Destination, dates and quoted rate.</li>
					<li><b>“Carrier”</b> means a motor carrier of property duly licensed by State and/or Federal Department of Transportation, as defined at 49 U.S.C. §13102(14).</li>
					<li><b>“Carrier Form”</b> means a receipt, inspection report, Bill of Sale, shipping order, Bill of Lading or other document provided by the Carrier at Point of Origin and/or Destination.</li>
					<li><b>“COD”</b> means payment at delivery or collect on delivery.</li>
					<li><b>“Customer”</b> means the entity, including it's designated agents and representatives, to have arranged the transportation of Shipment by Amity Transportation.</li>
					<li><b>“Customer’s Agent”</b> means an entity over the Age of Majority authorized by the Customer to act and make arrangements on Customer's behalf.</li>
					<li><b>“Destination”</b> means the properly equipped and/or designed location to satisfy the conditions of the Agreement designated by the Customer or as later changed or modified by mutual agreement between Amity Transportation, Carrier and Customer anytime before delivery, where the Shipment has to be delivered.</li>
					<li><b>“Amity Transportationation”</b> means TRUST CARGO TRUCKING SERVICES INC, USDOT#3930142, located at 1200 BRICKELL AVE STE 1950 MIAMI, FL 33131, its affiliates and subsidiaries. Amity Transportation is a transportation broker as defined at 49 U.S.C. § 13102(2), arranging for the transportation of freight through third party Carriers and is duly licensed by the Department of Transportation (DOT), and is registered with the Federal Motor Carrier Safety Administration (FMCSA) under Docket No. MC-611862, USDOT#3930142, and/or other government agencies as may be required by law. Amity Transportation is not acting as either a Motor Carrier, or Common Carrier, or Contract Carrier within the meaning of USC Title 49.</li>
					<li><b>“Point of Origin”</b> means the properly equipped and/or designed location to satisfy the conditions of the Agreement designated by Customer or as later TRUST CARGO TRUCKING SERVICES INC DBA AMITY TRANSPORTATION 1200 Brickell Ave Ste 1950, Miami, FL 33131 Ph# (305) 433 - 3445 Email: operations@amitytransport.com modified by mutual agreement between Amity Transportation and Customer prior to transport, where the Shipment has to be picked up.</li>
					<li><b>“Shipment”</b> means the Customer’s property, including but not limited to an automobile or motorized vehicle, motorized equipment, palletized, boxed, packaged or miscellaneous items, arranged for transportation in accordance with these TERMS.</li>
					<li><b>“Order”</b> means a request from the Customer to Amity Transportation to make arrangements to move a Shipment from it's Point of Origin to it's Destination.</li>
					<li><b>“Order confirmation”</b> means a written confirmation from Customer to Amity Transportation either from Amity Transportation to Customer including but not limited to the Order details, the description of the Shipment, dates and time windows, quoted rate, etc.</li>
					<li><b>“Bill of Lading”</b> means a document being used to document all the details of the Shipment and its condition, Point of Origin, Destination and other details regarding the Order. Bill of Lading serves as a receipt and might serve as a contract between the Carrier and Customer.</li>
					<li><b>“Inoperable”</b> means a state or condition in which a Shipment cannot function or be driven for any reason including but not limited to its parts having been removed or damaged in any way</li>
				</ul>
				<h3>2. Services</h3>
				<ul>
					<li>Amity Transportation will arrange for the transportation of Customer’s Shipment by Carriers as per request of the customer Subject to these TERMS.</li>
					<li>Amity Transportation’s services are rendered at the moment when Customer's Order is accepted by the Carrier.</li>
					<li>Customer understands and accepts that Amity Transportation operates as a transportation broker. Amity Transportation is not acting as either a Motor Carrier, or Common Carrier, or Contract Carrier within the meaning of USC Title 49 and does not hold itself out as providing the transportation of the property.</li>
					<li>Customer understands and agrees that Amity Transportation does not take possession or responsibility for transports, handles of Customer's Shipment and assumes no liability for the shipment.</li>
					<li>Amity Transportation shall provide Customer with an estimated pickup and estimated delivery dates and times, however, delays may occur prior to, and/or during transport due to act of God, weather or road conditions, government regulations, mechanical problems, and other causes that are beyond Amity Transportation’s control. Customer understand and accepts that Amity Transportation is not – responsible or liable for any losses or expenses caused by delays of any kind or for any reason.</li>
					<li>Amity Transportation has the right to cancel or refuse any Order at any time in it's sole discretion.</li>
				</ul>
				<h3>3. Customer’s Responsibilities</h3>
				<ul>
					<li><b>Accuracy of Information.</b> Customer understands and accepts that Customer is taking liability to ensure the accuracy of any and all the Order details. Any changes to the Order, including but not limited to the description of the Shipment, Point of Origin and/or Destination, special instructions, etc., may result in additional fees. Customer understands and agrees that he is solely responsible for any incurred additional charges due to Customer providing any kind of unmatching information about the Order and/or Shipment in the Order Confirmation.</li>
					<li><b>Shipment size, weight, state and condition.</b> Customer is responsible for measuring, weighing and providing information about the Shipment's condition, weight, size and condition at the time of booking and/or prior to the moment a Carrier accepts the Order. In case of Shipment being misrepresented, including but not limited to Shipment's size, weight, modifications from stock, manufacturer's condition, the Carrier is liable to charge additional fees to transport or refuse to complete the Order.</li>
					<li><b>Preparing Shipment.</b> Customer understands and accepts that Customer is to prepare the Shipment for transport. Any not permanent or attached parts have to be safely secured or detached during the transit. Damage and/or loss caused to/by the not permanent or attached parts are the Customer's sole responsibility. Customer understands and agrees to waive all the claims against Amity Transportation and Carrier which are incurred by any parts that become loose or detached during the transit. In case of a vehicle, Customer is to leave the Shipment with no more than quarter tank of fuel. Carrier may refuse or charge additional fees for transportation of a Shipment in case he finds it is dangerous to transport due to attachments being not fairly secured or the fuel tank not meeting the requirement to be filled with no more than quarter tank of fuel.</li>
					<li><b>Personal Property.</b> Customer is allowed to leave one bag or suitcase of personal belongings in the vehicle situated in the trunk for transportation. The Customer understands and accepts that he is responsible for securing the personal belongigs inside. Amity Transportation advises not to transport anything fragile, expensive or important inside the vehicle. <b>DAMAGE AND/OR LOSS CAUSED TO/ BY THE ITEMS INSIDE INCLUDING DAMAGES TO THE INTERIOR ARE CUSTOMER'S SOLE RESPONSIBILITY.</b></li>
					<li><b>Alarm.</b> Customer is responsible to disarm all the alarm systems in the Shipment and provide detailed instructions to the Carrier of how the alarm should be disabled. Carrier may be forced to silence the alarm by ANY means available without Customer's confirmation in case of Carrier being not detailedly informed how to disengage the alarm or if the controller of the alarm is missing during the transportation.</li>
					<li><b>Prohibited Items.</b> Customer understands and accepts that Customer is <b>prohibited</b> from transporting guns, flammables, ammunition and explosives, contraband, drugs or narcotics, live pets, animals, plants or ANY illegal goods. Customer agrees and understands that the Order can be entirely cancelled and the Customer is solely responsible for any fees, fines, charges, damages and legal liabilities arising from violation of this Section and no amount is to be reimbursed or compensated to the Customer.</li>
				</ul>
				<h3>4. Customer Agreement</h3>
				<ul>
					<li>Customer understands and agrees that Customer will comply with all applicable laws, rules, and regulations including but not limited to customs, import or export laws, governmental regulations, etc.. Customer understands and agrees that Amity Transportation might require any and all documentation to comply with applicable regulations, rules and laws. No liability is assumed by Amity Transportation, it's representatives and subsidaries for any and all damage, loss, charges, fees, taxes. Acts by Customer's Agents are legally bind to the Customer and Customer carries liability for any and all damages, expenses or loss arising from Customer's Agents acts. Customer waives all claims and defenses on Customer not knowing, not having read or not understanding these TERMS.<br /><b>These</b> terms supersede any other oral or written confirmations and representations between Customer and Amity Transportation and may not be changed by anyone except for Amity Transportation. <b>Customer has fully read, understands and agrees these TERMS in their entirety by continuing this transaction.</b></li>
				</ul>
				<h3>5. Pickup and Delivery of Shipment</h3>
				<ul>
					<li>Customer must designate suitable locations for Point of Origin and Destination accessible for the arriving commercial transport unit. Customer understands and agrees that the Point of Origin and/or the Destination are subject to change due to several factors such as hanging wires, low hanging trees, road conditions, closures or any other factors that might obstruct Carrier's representative to reach the location with commercial transport unit.</li>
					<li>Customer understands and agrees that Carrier is liable to refuse to enter locations that Carrier might consider not suitable or unsafe for their commercial unit, and Customer needs to meet the driver outside the Point of Origin or Destination.</li>
					<li>Unless having an agreement with Amity Transportation or Carrier, Customer agrees that Customer must be present or must designate a Customer's Agent to be present if Customer is unabailable for any reason to be present at the Point of Origin or the Destination.</li>
					<li>Customer or it's Agent agree to a) inspect the Shipment for any pre-existing damage, b) acknowledge the condition of the Shipment, sign the Bill of Lading or Carrier Form after making detailed notations about the Shipment's condition, c) requesting a copy of Carrier Form or Bill of Lading.</li>
					<li>Amity Transportation advises to take pictures of Shipment from all angles and close pictures of pre-existing damages prior to signing of Bill of Lading and Carrier Form.</li>
					<li>Customer understands and accepts that Carrier Form or Bill of Lading are legal documents and in case of missing notations about damages of any cost, nature or value the Carrier Form or Bill of Lading are a confirmation that Customer received the Shipment in a satisfactory condition. Amity Transportation and the Carrier have no further responsibilities from the moment of Customer or it's Agent signing the Carrier Form or the Bill of Lading at the destination.</li>
				</ul>
				<h3>6. Carrier Responsibilities</h3>
				<ul>
					<li>Pick up and deliver Customer’s Shipment as close to Customer’s door or Customer’s designated Point of Origin and Destination as legally and safely as possible.</li>
					<li>Transport the Shipment in a commercially reasonable manner.</li>
					<li>Issue or present a Carrier Form, receipt or Bill of Lading at the Point of Origin and/or Destination. Customer or Customer’s Ag</li>
					<li>ent agrees to read such Carrier Form carefully as it may constitute a contract of transportation as between Customer and Carrier, and Customer will contact Carrier directly with any disputes or questions regarding such documents.</li>
					<li>Customer understands and agrees that Customer is subject to the Carrier’s terms and conditions of service, tariffs, rules or classification, copies of which must be requested by the Customer directly from the Carrier.</li>
				</ul>
				<h3>7. Fees and Payment</h3>
				<ul>
					<li>Customer agrees that all amounts are due in full for each Order and Additional Services according to the Order Confirmation terms and these TERMS without any reductions, chargebacks, offsets or delays and Customer has to pay them regardless of any claims, damages, delays, losses. Payment is due for the services when a Carrier is designated by Amity Transportation to transport the Order. Amity Transportation's services are deemed completed at the point of Carrier accepting the Order.</li>
					<li>COD payments are due to Carrier on or before the delivery of Shipment in form of including but not limited to cash, certified funds, cashier's check, money order, etc., in the name of Carrier. Customer WILL NOT use credit cards, bank transfers, personal checks to finalize the payment to the carrier. Amity Transportation shall not be liable for any losses or delays caused in event of these TERMS being violated by any of the parties including but not limited to the Customer, Customer Agent, Carrier, etc..</li>
					<li>Customer shall be liable to Amity Transportation for all expenses incurred by Amity Transportation.</li>
					<li>If Customer fails or refuses to pay the fees or accept delivery from the Carrier for any reason, then the Shipment may be placed in storage at Customer’s expense and subject to Carrier’s lien for transportation charges until Customer pays in full the remaining balance. Customer understands and agrees that all the other fees incurred by the Carrier or any other involved third party included but not limited to the redelivery service provider, storage facility, etc., are the responsiblity of Customer and Customer will not request for a reimbursement from Amity Transportation.</li>
				</ul>
				<h3>8. Cancellation and Refund Policy</h3>
				<ul>
					<li>Customer may cancel the Order if no carrier is designated to complete the Order. In the event of Customer canceling an Order for ANY reason after a Carrier is assigned for completion of the Order, or if the Carrier is denied to pick up after arrival at the Point of Origin for ANY reason the Customer agrees to pay a cancellation fee of at least one hundred dollars ($100.00) as Amity Transportation's services are considered completed at that point. Customer understands and agrees that the Customer is subject to additional cancellation fees imposed by the Carrier and other vendors contracted by Amity Transportation for provision of necessary services for completion of the Customer's Order.</li>
					<li>The total amount of the refund cannot exceed the total amount of unfulfilled portion of the Order, including the Additional Service fees paid by the Customer but not rendered for any reason by Amity Transportation.</li>
					<li>The cancellation of an Order has to be submitted in written form to Amity Transportation's email address operations@amitytransport.com. Any cancellation submitted via text messages, phone calls or any other means of communication will not be accepted by Amity Transportation.</li>
				</ul>
				<h3>9. Loss, Damage or Delay Claims</h3>
				<ul>
					<li>Amity Transportation is a property transportation broker and is not liable for ANY damage or loss caused to the Shipment during the transit.</li>
					<li>Customer agrees and understand that Carrier is the only party responsbile for damage and loss caused to a Shipment during the transit and all damage or loss claims have to be filed by the Customer directly with the Carrier who transported the Shipment, and not with Amity Transportation.</li>
					<li>In the event of Customer filing a claim against the Carrier, Customer must report the claim to Amity Transportation no later than withing <b>36 hours of the delivery,</b> so the Customer is liable to receive all the relevant documentation regarding the Carrier and the Order in comercially reasonable manner.</li>
					<li>Hereby customer understands and agrees that claims against Motor Carriers are governed by federal law, the Carmack Amendment ot the ICC Termination Act of 1995, 49 U.S.C. §14706. The Customer is solely responsible for seekeing legal advice at Customer's expense in the event of a claim.</li>
					<li>Customer agrees that Amity Transportation and Carrier are not liable for loss and damage caused by conditions or factors out of Amity Transportation's or Carrier's control including but not limited to damages and loss caused by acts of God, weather conditions, political conflicts, acts of terrorism, loose, unsafely wrapped, well worn, broken parts of the shipment, also the damages caused by/to the personal belongings included in the Shipment.</li>
				</ul>
				<h3>10. Indemnification</h3>
				<ul>
					<li>Customer understands and agrees to hold Amity Transportation and any person or entity representing Amity Transportation from any liabilities, damages, expenses including but not limited to fines, fees, payments or financial loss including attorneys' fees, actions and claims in any state, incurred by any person or entity, including damages for injury or death of a person and/or damage to anyone's property, or/and any acts or omissions of Customer and Customer Agents.</li>
				</ul>
				<h3>11. Arbitration</h3>
				<ul>
					<li>In an event of Amity Transportation being unable to resolve a claim, dispute, cancellation or any other escalation Customer understands and agrees to resolve them through any other third party or legal arbitration including but not limited to American Arbitry Association (“AAA”) in accordance with it’s Rules.</li>
				</ul>
				<h3>12. Limitation of Liability</h3>
				<ul>
					<li>Customer understands and agrees that any disputes, claims and damages arising from the contract, it’s terms or statute shall not exceed the total fees paid by Customer to Amity Transportation for it’s services with respect to Order confirmation.</li>
					<li>AMITY TRANSPORTATION DISCLAIMS ANY AND ALL WARRANTIES AND GUARANTEES. UNDER NO CIRCUMSTANCES AMITY TRANSPORTATION SHOULD BE LIABLE FOR ANY DIRECT, INDIRECT, COINCIDENTIAL, CONSEQUENTIAL, UNEXPECTED, SPECIAL OR ANY OTHER DAMAGES, UNDER ANY LEGAL THEORY ARISING FROM ANY WAY RELATED TO A SHIPMENT OR THESE TERMS, EVEN IF ADVISED OF THE POSSIBILITY OF OCCURRENCE OF SUCH DAMAGES.</li>
				</ul>
			</div>
            <Footer weTransportRef={weTransportRef} />
        </div>
    )
}
NDSummary.OnToolTipsLoaded("File:MicroStrain/MIP/MipTypes.h",{894:"<div class=\"NDToolTip TStruct LC\"><div class=\"TTSummary\">Contains enumeration/types for various MIP information</div></div>",895:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The enums for all the different data classes of MIP data.</div></div>",906:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The enums for all the different types/categories of MIP commands and data.</div></div>",913:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The enums for enable or disable of data.</div></div>",916:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The enums to represent different time categories.</div></div>",919:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The enums for all of the different MIP commands.</div></div>",1035:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The enums for all of the different MIP Channel Field IDs.</div></div>",1286:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The enums for different MIP Channel Qualifiers.&nbsp; This combined with the ChannelField produces a unique identifier for each individual channel that is collected.</div></div>",1384:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1384\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> std::<span class=\"SHKeyword\">string</span> channelName(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">ChannelField&nbsp;</td><td class=\"PName last\">field,</td></tr><tr><td class=\"PType first\">ChannelQualifier&nbsp;</td><td class=\"PName last\">qualifier</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets the name of the specified &lt;ChannelId&gt;.&nbsp; This is the universal channel name that should be used for uploading to SensorCloud.</div></div>",1385:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1385\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> MipChannelFields getChannelFields_allDataClasses(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">ChannelField&nbsp;</td><td class=\"PName last\">chField</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Get a list of ChannelFields representing the same descriptor/channel field across all GNSS data classes</div></div>",1386:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1386\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> ChannelField getChannelField_baseDataClass(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">ChannelField&nbsp;</td><td class=\"PName last\">chField</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets the ChannelField representing the provided channel field\'s equivalent in the original GNSS data class (0x81)</div></div>",1387:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1387\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> ChannelField getChannelField_toDataClass(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">ChannelField&nbsp;</td><td class=\"PName last\">chField,</td></tr><tr><td class=\"PType first\">DataClass&nbsp;</td><td class=\"PName last\">dataClass</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets the ChannelField representing the provided channel field\'s equivalent in the specified DataClass</div></div>",1388:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1388\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> std::<span class=\"SHKeyword\">string</span> getChannelNamePrependText(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">ChannelField&nbsp;</td><td class=\"PName last\">chField</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets the text to prepend the channel name to distinguish between different GNSS data classes</div></div>",1389:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1389\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> std::<span class=\"SHKeyword\">string</span> getChannelNameAppendText(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">ChannelField&nbsp;</td><td class=\"PName last\">chField</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets the text to append to the channel name to distinguish between different shared data fields</div></div>",1390:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1390\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static bool</span> isGnssChannelField(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">ChannelField&nbsp;</td><td class=\"PName last\">chField</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Checks whether the provided ChannelField is within a GNSS data set.</div></div>",1391:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1391\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static bool</span> isSharedChannelField(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">ChannelField&nbsp;</td><td class=\"PName last\">chField</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Checks whether the provided ChannelField is a shared field amongst all inertial data sets.</div></div>",1392:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1392\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">MipChannelIdentifier</div></div></div><div class=\"TTSummary\">A single additional identifier for a MipDataPoint. Contains a uint value with an identifier type specifier.</div></div>",1401:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">ID definitions when Type is &lt;MipChannelIdentifier::Type::AIDING_MEASUREMENT_TYPE&gt; GNSS&nbsp; - 0x01 - GNSS DUAL_ANTENNA&nbsp; - 0x02 - Dual Antenna HEADING&nbsp; - 0x03 - Heading PRESSURE&nbsp; - 0x04 - Pressure MAGNETOMETER&nbsp; - 0x05 - Magnetometer SPEED&nbsp; - 0x06 - Speed</div></div>",1402:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">ID definitions when Type is &lt;MipChannelIdentifier::Type::GNSS_CONSTELLATION&gt; UNKNOWN_CONSTELLATION - 0 - Unknown GPS&nbsp; - 1 - GPS GLONASS&nbsp; - 2 - GLONASS GALILEO&nbsp; - 3 - Galileo BEIDOU&nbsp; - 4 - BeiDou</div></div>",1403:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">ID definitions when Type is &lt;MipChannelIdentifier::Type::GNSS_SIGNAL_ID&gt; UNKNOWN&nbsp; - 0 GPS_L1CA&nbsp; - 1 GPS_L1P&nbsp; - 2 GPS_L1Z&nbsp; - 3 GPS_L2CA&nbsp; - 4 GPS_L2P&nbsp; - 5 GPS_L2Z&nbsp; - 6 GPS_L2CL&nbsp; - 7 GPS_L2CM&nbsp; - 8 GPS_L2CML&nbsp; - 9 GPS_L5I&nbsp; - 10 GPS_L5Q&nbsp; - 11 GPS_L5IQ&nbsp; - 12 GPS_L1CD&nbsp; - 13 GPS_L1CP&nbsp; - 14 GPS_L1CDP&nbsp; - 15 GLONASS_G1CA&nbsp; - 32 GLONASS_G1P&nbsp; - 33 GLONASS_G2C&nbsp; - 34 GLONASS_G2P&nbsp; - 35 GALILEO_E1C&nbsp; - 64 GALILEO_E1A&nbsp; - 65 GALILEO_E1B&nbsp; - 66 GALILEO_E1BC&nbsp; - 67 GALILEO_E1ABC&nbsp; - 68 GALILEO_E6C&nbsp; - 69 GALILEO_E6A&nbsp; - 70 GALILEO_E6B&nbsp; - 71 GALILEO_E6BC&nbsp; - 72 GALILEO_E6ABC&nbsp; - 73 GALILEO_E5BI&nbsp; - 74 GALILEO_E5BQ&nbsp; - 75 GALILEO_E5BIQ&nbsp; - 76 GALILEO_E5ABI&nbsp; - 77 GALILEO_E5ABQ&nbsp; - 78 GALILEO_E5ABIQ&nbsp; - 79 GALILEO_E5AI&nbsp; - 80 GALILEO_E5AQ&nbsp; - 81 GALILEO_E5AIQ&nbsp; - 82 SBAS_L1CA&nbsp; - 96 SBAS_L5I&nbsp; - 97 SBAS_L5Q&nbsp; - 98 SBAS_L5IQ&nbsp; - 99 QZSS_L1CA&nbsp; - 128 QZSS_LEXS&nbsp; - 129 QZSS_LEXL&nbsp; - 130 QZSS_LEXSL&nbsp; - 131 QZSS_L2CM&nbsp; - 132 QZSS_L2CL&nbsp; - 133 QZSS_L2CML&nbsp; - 134 QZSS_L5I&nbsp; - 135 QZSS_L5Q&nbsp; - 136 QZSS_L5IQ&nbsp; - 137 QZSS_L1CD&nbsp; - 138 QZSS_L1CP&nbsp; - 139 QZSS_L1CDP&nbsp; - 140 BEIDOU_B1I&nbsp; - 160 BEIDOU_B1Q&nbsp; - 161 BEIDOU_B1IQ&nbsp; - 162 BEIDOU_B3I&nbsp; - 163 BEIDOU_B3Q&nbsp; - 164 BEIDOU_B3IQ&nbsp; - 165 BEIDOU_B2I&nbsp; - 166 BEIDOU_B2Q&nbsp; - 167 BEIDOU_B2IQ&nbsp; - 168</div></div>",1404:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1404\" class=\"NDPrototype NoParameterForm\">MipChannelIdentifier()</div><div class=\"TTSummary\">Default constructor</div></div>",1405:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1405\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">MipChannelIdentifier(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Type&nbsp;</td><td class=\"PName last\">identiferType,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">id</td></tr></table></td><td class=\"PAfterParameters\">) : m_type(identiferType), m_id(id)</td></tr></table></div><div class=\"TTSummary\">Construct MipChannelIdentifier object with specified MipChannelIdentifier::Type and ID values.</div></div>",1406:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1406\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">MipChannelIdentifier(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Type&nbsp;</td><td class=\"PName last\">identiferType,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">id,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">specifier</td></tr></table></td><td class=\"PAfterParameters\">) : m_type(identiferType), m_id(id), m_specifier(specifier)</td></tr></table></div><div class=\"TTSummary\">Construct MipChannelIdentifier object with specified MipChannelIdentifier::Type and ID values.</div></div>",1407:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1407\" class=\"NDPrototype NoParameterForm\">Type identifierType() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Returns the MipChannelIdentifier::Type specifier of this identifier.</div></div>",1408:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1408\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> id() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Returns the identifier value.</div></div>",1409:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1409\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> hasSpecifier() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Indicates whether this identifier has an optional additional specifier.</div></div>",1410:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1410\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> specifier() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Returns the optional additional specifier value.&nbsp; Note: this is only valid and applicable if hasSpecifier returns true - value may be non-zero regardless.</div></div>",1411:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1411\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">std::<span class=\"SHKeyword\">string</span> name(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName\">standardizedFormat&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHKeyword\">true</span></td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Returns the string representation of this identifier based on type and value.</div></div>",1412:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1412\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> hasSpecifier(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">specifierName</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Indicates whether this identifier has an optional additional specifier.&nbsp; Parameters: specifierName - string reference that is set to the specifier name if found</div></div>",1413:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">A vector of MipChannelIdentifier values, used to assign additional identifiers to a MipDataPoint</div></div>",1414:"<div class=\"NDToolTip TStruct LC\"><div class=\"TTSummary\">Contains an &lt;Command&gt; id and a BytesCollection vector to store the actual bytes to send to the device for that command.</div></div>",1415:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">A vector of MipCommandBytes</div></div>",1416:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">A ValueType vector</div></div>",1417:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">A Value vector</div></div>",1418:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">A MipTypes::FunctionSelector vector</div></div>",1419:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">A map of locations and values to match in a MIP response to determine success</div></div>",1420:"<div class=\"NDToolTip TStruct LC\"><div class=\"TTSummary\">Maps GNSS Receiver ID to the MipTypes::DataClass it outputs to</div></div>",1421:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1421\" class=\"NDPrototype NoParameterForm\">GnssReceiverInfo()</div><div class=\"TTSummary\">Constructs GnssReceiverInfo object with default values</div></div>",1422:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1422\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">GnssReceiverInfo(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">recId,</td></tr><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">DataClass&nbsp;</td><td class=\"PName last\">target,</td></tr><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">desc</td></tr></table></td><td class=\"PAfterParameters\">) : id(recId), targetDataClass(target), description(desc)</td></tr></table></div><div class=\"TTSummary\">Constructs GnssReceiverInfo object with specified values</div></div>",1423:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1423\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> id</div><div class=\"TTSummary\">Receiver ID</div></div>",1424:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1424\" class=\"NDPrototype NoParameterForm\">MipTypes::DataClass targetDataClass</div><div class=\"TTSummary\">MIP data class associated with this receiver</div></div>",1425:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1425\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> description</div><div class=\"TTSummary\">ASCII description of receiver</div></div>",1426:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">A vector of GnssReceiverInfo</div></div>"});
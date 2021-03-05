//------------------------------------------------------------------------------
// <auto-generated />
//
// This file was automatically generated by SWIG (http://www.swig.org).
// Version 4.0.0
//
// Do not make changes to this file unless you know what you are doing--modify
// the SWIG interface file instead.
//------------------------------------------------------------------------------

namespace mscl {

public class MipNodeFeatures : global::System.IDisposable {
  private global::System.Runtime.InteropServices.HandleRef swigCPtr;
  protected bool swigCMemOwn;

  internal MipNodeFeatures(global::System.IntPtr cPtr, bool cMemoryOwn) {
    swigCMemOwn = cMemoryOwn;
    swigCPtr = new global::System.Runtime.InteropServices.HandleRef(this, cPtr);
  }

  internal static global::System.Runtime.InteropServices.HandleRef getCPtr(MipNodeFeatures obj) {
    return (obj == null) ? new global::System.Runtime.InteropServices.HandleRef(null, global::System.IntPtr.Zero) : obj.swigCPtr;
  }

  ~MipNodeFeatures() {
    Dispose(false);
  }

  public void Dispose() {
    Dispose(true);
    global::System.GC.SuppressFinalize(this);
  }

  protected virtual void Dispose(bool disposing) {
    lock(this) {
      if (swigCPtr.Handle != global::System.IntPtr.Zero) {
        if (swigCMemOwn) {
          swigCMemOwn = false;
          msclPINVOKE.delete_MipNodeFeatures(swigCPtr);
        }
        swigCPtr = new global::System.Runtime.InteropServices.HandleRef(null, global::System.IntPtr.Zero);
      }
    }
  }

  public static bool isChannelField(ushort descriptor) {
    bool ret = msclPINVOKE.MipNodeFeatures_isChannelField(descriptor);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public bool supportsCategory(MipTypes.DataClass dataClass) {
    bool ret = msclPINVOKE.MipNodeFeatures_supportsCategory(swigCPtr, (int)dataClass);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public bool supportsCommand(MipTypes.Command commandId) {
    bool ret = msclPINVOKE.MipNodeFeatures_supportsCommand(swigCPtr, (int)commandId);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public MipCommands supportedCommands() {
    MipCommands ret = new MipCommands(msclPINVOKE.MipNodeFeatures_supportedCommands(swigCPtr), true);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public MipChannelFields supportedChannelFields(MipTypes.DataClass dataClass) {
    MipChannelFields ret = new MipChannelFields(msclPINVOKE.MipNodeFeatures_supportedChannelFields(swigCPtr, (int)dataClass), true);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public SampleRates supportedSampleRates(MipTypes.DataClass dataClass) {
    SampleRates ret = new SampleRates(msclPINVOKE.MipNodeFeatures_supportedSampleRates(swigCPtr, (int)dataClass), false);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public GnssReceivers gnssReceiverInfo() {
    GnssReceivers ret = new GnssReceivers(msclPINVOKE.MipNodeFeatures_gnssReceiverInfo(swigCPtr), false);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public CommPortInfo getCommPortInfo() {
    CommPortInfo ret = new CommPortInfo(msclPINVOKE.MipNodeFeatures_getCommPortInfo(swigCPtr), true);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public bool useLegacyIdsForEnableDataStream() {
    bool ret = msclPINVOKE.MipNodeFeatures_useLegacyIdsForEnableDataStream(swigCPtr);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public HeadingUpdateOptionsList supportedHeadingUpdateOptions() {
    HeadingUpdateOptionsList ret = new HeadingUpdateOptionsList(msclPINVOKE.MipNodeFeatures_supportedHeadingUpdateOptions(swigCPtr), true);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public StatusSelectors supportedStatusSelectors() {
    StatusSelectors ret = new StatusSelectors(msclPINVOKE.MipNodeFeatures_supportedStatusSelectors(swigCPtr), true);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public EstimationControlOptions supportedEstimationControlOptions() {
    EstimationControlOptions ret = new EstimationControlOptions(msclPINVOKE.MipNodeFeatures_supportedEstimationControlOptions(swigCPtr), true);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public VehicleModeTypes supportedVehicleModeTypes() {
    VehicleModeTypes ret = new VehicleModeTypes(msclPINVOKE.MipNodeFeatures_supportedVehicleModeTypes(swigCPtr), true);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public AdaptiveMeasurementModes supportedAdaptiveMeasurementModes() {
    AdaptiveMeasurementModes ret = new AdaptiveMeasurementModes(msclPINVOKE.MipNodeFeatures_supportedAdaptiveMeasurementModes(swigCPtr), true);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public AdaptiveFilterLevels supportedAdaptiveFilterLevels() {
    AdaptiveFilterLevels ret = new AdaptiveFilterLevels(msclPINVOKE.MipNodeFeatures_supportedAdaptiveFilterLevels(swigCPtr), true);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public PpsSourceOptions supportedPpsSourceOptions() {
    PpsSourceOptions ret = new PpsSourceOptions(msclPINVOKE.MipNodeFeatures_supportedPpsSourceOptions(swigCPtr), true);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public GpioPinModeOptions supportedGpioPinModes(GpioConfiguration.Feature feature, byte behavior) {
    GpioPinModeOptions ret = new GpioPinModeOptions(msclPINVOKE.MipNodeFeatures_supportedGpioPinModes(swigCPtr, (int)feature, behavior), true);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public GpioBehaviorModes supportedGpioBehaviors(GpioConfiguration.Feature feature) {
    GpioBehaviorModes ret = new GpioBehaviorModes(msclPINVOKE.MipNodeFeatures_supportedGpioBehaviors(swigCPtr, (int)feature), true);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public GpioFeatureBehaviors supportedGpioFeatures(byte pin) {
    GpioFeatureBehaviors ret = new GpioFeatureBehaviors(msclPINVOKE.MipNodeFeatures_supportedGpioFeatures(swigCPtr, pin), true);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public GpioPinOptions supportedGpioConfigurations() {
    GpioPinOptions ret = new GpioPinOptions(msclPINVOKE.MipNodeFeatures_supportedGpioConfigurations(swigCPtr), true);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

}

}

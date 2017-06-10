package com.mobileapp;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.react.rnspinkit.RNSpinkitPackage;
import com.zmxv.RNSound.RNSoundPackage;
import com.RNFetchBlob.RNFetchBlobPackage;
import com.rnim.rn.audio.ReactNativeAudioPackage;
import com.cboy.rn.splashscreen.SplashScreenReactPackage;
import com.BV.LinearGradient.LinearGradientPackage;
import com.mediaPlayer.ReactNativeAudioStreamingPackage;
import com.github.xinthink.rnmk.ReactMaterialKitPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.facebook.stetho.Stetho;

import com.horcrux.svg.SvgPackage;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
        new MainReactPackage(),
            new RNSpinkitPackage(),
            new RNSoundPackage(),
            new RNFetchBlobPackage(),
            new ReactNativeAudioPackage(),
            new SplashScreenReactPackage(),
            new LinearGradientPackage(),
            new ReactNativeAudioStreamingPackage(),
            new ReactMaterialKitPackage(),
            new VectorIconsPackage(),
        new SvgPackage()
      );
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);

    Stetho.InitializerBuilder initializerBuilder = Stetho.newInitializerBuilder(this);

    // Enable Chrome DevTools
    initializerBuilder.enableWebKitInspector(
            Stetho.defaultInspectorModulesProvider(this)
    );

    // Enable command line interface
    initializerBuilder.enableDumpapp(
            Stetho.defaultDumperPluginsProvider(this)
    );

    // Use the InitializerBuilder to generate an Initializer
    Stetho.Initializer initializer = initializerBuilder.build();

    // Initialize Stetho with the Initializer
    Stetho.initialize(initializer);
  }
}

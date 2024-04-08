import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:Open_Fashion/bloc/splash_event.dart';
import 'package:Open_Fashion/bloc/splash_state.dart';

class SplashBloc extends Bloc<SplashEvent, SplashState> {
  SplashBloc() : super(SplashInitialState()) {
    on<SetSplash>((event, emit) async {
      emit(SplashLoadingState());
      await Future.delayed(const Duration(seconds: 5));
      emit(SplashLoadedState());
    });
  }
}

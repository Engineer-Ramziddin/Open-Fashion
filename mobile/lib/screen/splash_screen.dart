import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:Open_Fashion/bloc/splash_bloc.dart';
import 'package:Open_Fashion/bloc/splash_event.dart';
import 'package:Open_Fashion/bloc/splash_state.dart';
import 'package:Open_Fashion/screen/home_screen.dart';
import 'package:Open_Fashion/screen/register_screen.dart';

class SplashScreen extends StatelessWidget {
  const SplashScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    BlocProvider.of<SplashBloc>(context).add(SetSplash());
    return Scaffold(
      body: BlocConsumer<SplashBloc, SplashState>(
        listener: (context, state) {
          if (state is SplashLoadedState) {
            Navigator.pushReplacement(
                context, MaterialPageRoute(builder: (context) => SignupPage()));
          }
        },
        builder: (context, state) {
          if (state is SplashLoadingState) {
            return Center(
              child: Image.asset(
                'assets/logo512.png',
                height: 70,
              ),
            );
          }
          return Container();
        },
      ),
    );
  }
}

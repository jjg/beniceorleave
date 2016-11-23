from setuptools import setup

setup(
    name='minitwit',
    packages=['minitwit'],
    include_package_data=True,
    install_requires=[
        'flask',
        'flask-markdown',
        'Flask-SSLify'
    ],
    setup_requires=[
        'pytest-runner',
    ],
    tests_require=[
        'pytest',
    ],
)
